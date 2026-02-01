import { parseSync, Visitor } from 'oxc-parser'
import { generateHash } from '@/utils'
import type { TransformResult, CssVarDecl, CssVarRef, Replacement } from '@/types'

export const TRANSFORMABLE_EXT = /\.(tsx|jsx|ts|js)$/
export const TEMPLATE_PATTERN = /\bg?css`(.*?)`/gs
export const VIRTUAL_PREFIX = 'virtual:rawstyle/'
export const RESOLVED_PREFIX = `\0${VIRTUAL_PREFIX}`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const css = (str: TemplateStringsArray) => ''
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const gcss = (str: TemplateStringsArray) => null
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const cn = (...classes: (string | boolean)[]) => ''

export const transform = (file: string, source: string): TransformResult => {
	const { program } = parseSync(file, source)
	const cssVarDecls: CssVarDecl[] = []
	const cssVarRefs: CssVarRef[] = []
	const replacements: Replacement[] = []
	let isInClassNameAttr = false
	let activeRange: { start: number, end: number } | null
	let currentVarName: string | null

	new Visitor({
		ImportDeclaration(node) {
			if (node.source.value === 'rawstyle')
				replacements.push({ start: node.start, end: node.end, replacement: '' })
		},

		CallExpression(node) {
			if (node.callee.type === 'Identifier' && node.callee.name === 'cn') {
				replacements.push({ start: node.start, end: node.start + 3, replacement: '[' })
				replacements.push({ start: node.end - 1, end: node.end, replacement: '].filter(Boolean).join(\' \')' })
			}
		},

		JSXAttribute(node) {
			if (node.name.name !== 'className') return
			if (node.value?.type !== 'JSXExpressionContainer') return
			isInClassNameAttr = true
		},

		Identifier(node) {
			if (!isInClassNameAttr) return
			cssVarRefs.push({ name: node.name, start: node.start, end: node.end })
		},

		'JSXAttribute:exit'() {
			isInClassNameAttr = false
		},

		VariableDeclaration(node) {
			const variableDeclarator = node.declarations[0]
			const identifier = variableDeclarator.id
			if (identifier.type !== 'Identifier') return
			currentVarName = identifier.name
			activeRange = { start: node.start, end: node.end }
		},

		'VariableDeclaration:exit'() {
			currentVarName = null
			activeRange = null
		},

		ExpressionStatement(node) {
			activeRange = { start: node.start, end: node.end }
		},

		'ExpressionStatement:exit'() {
			activeRange = null
		},

		TaggedTemplateExpression(node) {
			const tag = node.tag
			if (tag.type !== 'Identifier' || (tag.name !== 'css' && tag.name !== 'gcss')) return
			const template = node.quasi.quasis.map(q => q.value.cooked).join('')
			if (!activeRange) return
			cssVarDecls.push({ name: currentVarName ?? '', tag: tag.name, template, start: activeRange.start, end: activeRange.end })
			replacements.push({ start: activeRange.start, end: activeRange.end, replacement: '' })
		},
	}).visit(program)

	let transformed = source
	const hash = generateHash(file)
	let css = ''

	for (const cssVar of cssVarDecls) {
		if (cssVar.tag === 'gcss') {
			css += cssVar.template
		} else if (cssVar.tag === 'css') {
			const className = `${cssVar.name}_${hash}`
			const refs = cssVarRefs.filter(ref => ref.name === cssVar.name)
			if (!refs.length) continue
			for (const ref of refs) replacements.push({ start: ref.start, end: ref.end, replacement: `'${className}'` })
			css += `.${className}{${cssVar.template}}`
		}
	}

	replacements.sort((a, b) => b.start - a.start)

	for (const rep of replacements) transformed = transformed.slice(0, rep.start) + rep.replacement + transformed.slice(rep.end)

	return { transformed, css }
}