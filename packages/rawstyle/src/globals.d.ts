declare global {
	const css: (str: TemplateStringsArray) => string
	const gcss: (str: TemplateStringsArray) => null
	const cn: (...classes: (string | boolean)[]) => string
}
export {}