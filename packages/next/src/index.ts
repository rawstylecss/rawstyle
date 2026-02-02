import { TRANSFORMABLE_EXT } from 'rawstyle'
import { transform } from 'rawstyle/transformer'
import type { NextConfig } from 'next'

export const rawstyleTurboRule: Required<Required<NextConfig>['turbopack']>['rules'] = {
	'*': {
		loaders: ['@rawstyle/next'],
		condition: { all: [{ not: 'foreign' }, { path: TRANSFORMABLE_EXT }] },
	},
}

export default function (this: { resourcePath: string }, source: string): string {
	const { transformed, css } = transform(this.resourcePath, source)
	const base64Css = Buffer.from(css, 'utf8').toString('base64')
	return `import 'data:text/css;base64,${base64Css}';${transformed}`
}