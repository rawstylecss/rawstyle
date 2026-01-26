import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import rawstyle from '@rawstyle/vite'
import type { UserConfig } from 'rolldown-vite'

export default {
	resolve: { alias: {	'@': resolve('src') } },
	plugins: [react(), rawstyle()],
} satisfies UserConfig