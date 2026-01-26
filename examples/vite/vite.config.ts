import { resolve } from 'node:path'
import { defineConfig } from 'rolldown-vite'
import react from '@vitejs/plugin-react'
import rawstyle from '@rawstyle/vite'

export default defineConfig({
	resolve: { alias: {	'@': resolve('src') } },
	plugins: [react(), rawstyle()],
})