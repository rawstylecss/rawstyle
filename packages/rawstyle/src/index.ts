import { parseSync, Visitor } from 'oxc-parser'
import { generateHash } from '@/utils'
import type { TransformResult, ClassNameId, CssVar, Replacement } from '@/types'

export const TRANSFORMABLE_EXTENSION = /\.(tsx|jsx|ts|js)$/
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
	const cssVars: CssVar[] = []
	const classNameIds: ClassNameId[] = []
	const replacements: Replacement[] = []
	let insideClassName = false
	let curRange = { start: 0, end: 0 }
	let lastId = ''

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
			insideClassName = true
		},

		Identifier(node) {
			if (!insideClassName) return
			classNameIds.push({ name: node.name, start: node.start, end: node.end })
		},

		'JSXAttribute:exit'() {
			insideClassName = false
		},

		VariableDeclaration(node) {
			const variableDeclarator = node.declarations[0]
			const identifier = variableDeclarator.id
			if (identifier.type !== 'Identifier') return
			lastId = identifier.name
			curRange = { start: node.start, end: node.end }
		},

		'VariableDeclaration:exit'() {
			lastId = ''
			curRange = { start: 0, end: 0 }
		},

		ExpressionStatement(node) {
			curRange = { start: node.start, end: node.end }
		},

		'ExpressionStatement:exit'() {
			curRange = { start: 0, end: 0 }
		},

		TaggedTemplateExpression(node) {
			const tag = node.tag
			if (tag.type !== 'Identifier' || (tag.name !== 'css' && tag.name !== 'gcss')) return

			const template = node.quasi.quasis.map(q => q.value.cooked).join('')
			cssVars.push({ name: lastId, tag: tag.name, template, start: curRange.start, end: curRange.end })
			replacements.push({ start: curRange.start, end: curRange.end, replacement: '' })
		},
	}).visit(program)

	let transformed = source
	const hash = generateHash(file)
	let extractedCss = ''

	for (const cssVar of cssVars) {
		if (cssVar.tag === 'gcss') {
			extractedCss += cssVar.template
		} else if (cssVar.tag === 'css') {
			const className = `${cssVar.name}_${hash}`
			const classNameId = classNameIds.find(cn => cn.name === cssVar.name)
			if (!classNameId) continue
			replacements.push({ start: classNameId.start, end: classNameId.end, replacement: `'${className}'` })
			extractedCss += `.${className}{${cssVar.template}}`
		}
	}

	replacements.sort((a, b) => b.start - a.start)

	for (const rep of replacements) transformed = transformed.slice(0, rep.start) + rep.replacement + transformed.slice(rep.end)

	return { transformedCode: transformed, extractedCss }
}