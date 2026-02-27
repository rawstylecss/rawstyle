import type { ViteUserConfig, Plugin } from 'vitest/config'
import { resolve, dirname } from 'node:path'
import { existsSync } from 'node:fs'

const aliasResolver = (): Plugin => {
	const findNearestSrcDir = (path: string) => {
		let current = dirname(path)

		while (current !== dirname(current)) {
			const filePath = resolve(current, 'src')
			if (existsSync(filePath)) return filePath
			current = dirname(current)
		}

		return null
	}

	return {
		name: 'alias-resolver',
		resolveId(id, importer) {
			if (!id.startsWith('@/') || !importer) return

			const entry = id.split('/')[1]
			const src = findNearestSrcDir(importer)
			if (!src) return

			const target = resolve(src, entry)
			if (existsSync(target + '.ts')) return target + '.ts'
			const index = resolve(target, 'index.ts')
			if (existsSync(index)) return index

			return
		},
	}
}

export default {
	test: {},
	plugins: [aliasResolver()],
} satisfies ViteUserConfig