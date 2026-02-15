import { parseSync, Visitor } from 'oxc-parser'
import { generateHash } from '@/utils'
import type { TransformResult, Replacement } from '@/types'

export const transform = (file: string, source: string): TransformResult => {
	const { program } = parseSync(file, source)
	const fileHash = generateHash(file)
	let transformed = source
	let css = ''
	const replacements: Replacement[] = []
	let activeVarName: string | null

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

		VariableDeclaration(node) {
			const variableDeclarator = node.declarations[0]
			const identifier = variableDeclarator.id
			if (identifier.type !== 'Identifier') return
			activeVarName = identifier.name
		},

		'VariableDeclaration:exit'() {
			activeVarName = null
		},

		TaggedTemplateExpression(node) {
			const tag = node.tag
			if (tag.type !== 'Identifier' || !/^g?css$/.test(tag.name) || !activeVarName) return

			const cssTpl = source.slice(node.quasi.start + 1, node.quasi.end - 1)
			let rep = ''
			if (tag.name === 'gcss') {
				css += cssTpl
				rep = '""'
			} else {
				const clName = `${activeVarName.replace(/css|styles?$/i, '')}_${fileHash}`
				css += `.${clName} {${cssTpl}}`
				rep = `'${clName}'`
			}

			replacements.push({ start: node.start, end: node.end, replacement: rep })
		},
	}).visit(program)

	replacements.sort((a, b) => b.start - a.start)
	for (const rep of replacements) transformed = transformed.slice(0, rep.start) + rep.replacement + transformed.slice(rep.end)

	return { transformed, css }
}