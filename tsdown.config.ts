import { basename } from 'node:path'
import type { UserConfig } from 'tsdown'

const isProd = process.argv.includes('--prod')
const pkg = basename(process.cwd())

export default {
	entry: pkg === 'rawstyle' ? ['src/index.ts', 'src/transformer.ts'] : undefined,
	minify: isProd,
	sourcemap: isProd ? false : 'inline',
	fixedExtension: false,
	copy: pkg == 'rawstyle' ? 'src/globals.d.ts' : undefined,
} satisfies UserConfig