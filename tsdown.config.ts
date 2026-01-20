import { defineConfig } from 'tsdown'

const isProd = process.argv.includes('--prod')

export default defineConfig({
	minify: isProd,
	sourcemap: isProd ? false : 'inline',
	fixedExtension: false,
	noExternal: /^\\@.+/,
	dts: true,
})