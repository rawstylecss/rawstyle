import { resolve } from 'node:path'
import { defineConfig } from 'rolldown-vite'
import react from '@vitejs/plugin-react'
import rawtyle from '@rawstyle/vite'

export default defineConfig({
	resolve: { alias: {	'@': resolve('src') } },
	plugins: [react(), rawtyle()],
})