declare global {
	const css: (str: TemplateStringsArray) => string
	const cn: (...classes: (string | boolean)[]) => string
}
export {}