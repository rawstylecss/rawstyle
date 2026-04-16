import type { UserConfig } from 'tsdown'
import voicss from '@voicss/vite'

const isProd = process.argv.includes('-p')

export default {
	minify: isProd,
	sourcemap: isProd ? false : 'inline',
	fixedExtension: false,
	plugins: [voicss()],
} satisfies UserConfig