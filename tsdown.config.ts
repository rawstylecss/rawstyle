import { basename } from 'node:path'
import type { UserConfig } from 'tsdown'

const isProd = process.argv.includes('--prod')
const pkg = basename(process.cwd())

export default {
	minify: isProd,
	sourcemap: isProd ? false : 'inline',
	fixedExtension: false,
	copy: pkg == 'rawstyle' ? 'src/globals.d.ts' : undefined,
} satisfies UserConfig