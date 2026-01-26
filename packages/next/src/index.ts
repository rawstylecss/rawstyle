import { transform } from 'rawstyle'

export default function (this: { resourcePath: string }, source: string): string {
	const { transformed, css } = transform(this.resourcePath, source)
	const base64Css = Buffer.from(css, 'utf8').toString('base64')
	return `import 'data:text/css;base64,${base64Css}';${transformed}`
}