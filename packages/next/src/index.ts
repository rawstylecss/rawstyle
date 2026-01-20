import { transform } from 'rawstyle'

export default function (this: { resourcePath: string }, source: string): string {
	const { transformedCode, extractedCss } = transform(this.resourcePath, source)
	const base64Css = Buffer.from(extractedCss, 'utf8').toString('base64')
	return `import "data:text/css;base64,${base64Css}";${transformedCode}`
}