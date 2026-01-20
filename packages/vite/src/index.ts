import type { Plugin } from 'rolldown-vite'
import { transform, VIRTUAL_PREFIX, RESOLVED_PREFIX } from 'rawstyle'

const styles = new Map<string, string>()

export default (): Plugin => ({
	name: 'rawstyle-vite',
	enforce: 'pre',

	resolveId(id) {
		if (id.startsWith(VIRTUAL_PREFIX))
			return RESOLVED_PREFIX + id.slice(VIRTUAL_PREFIX.length)
	},

	load(id) {
		if (id.startsWith(RESOLVED_PREFIX)) {
			const cssId = id.slice(RESOLVED_PREFIX.length)
			return styles.get(cssId)
		}
	},

	transform(code, id) {
		if (!id.endsWith('.tsx')) return
		const { transformedCode, extractedCss } = transform(id, code)
		const cssId = id + '.css'
		styles.set(cssId, extractedCss)
		return `import "${VIRTUAL_PREFIX}${cssId}";${transformedCode}`
	},

	async handleHotUpdate({ file, server, modules, read }) {
		if (!file.endsWith('.tsx')) return
		const sourceCode = await read()
		const { extractedCss } = transform(file, sourceCode)
		const cssId = file + '.css'
		const virtualId = RESOLVED_PREFIX + cssId
		const mod = server.moduleGraph.getModuleById(virtualId)
		styles.set(cssId, extractedCss)
		if (mod) return [...modules, mod]
	},
})