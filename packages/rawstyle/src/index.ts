type CssFn = (str: TemplateStringsArray) => string
type CnFn = (...classes: (string | boolean)[]) => string

declare global {
	const css: CssFn
	const cn: CnFn
}

export const TRANSFORMABLE_EXT = /\.(tsx|jsx|ts|js)$/
export const TEMPLATE_PATTERN = /(?<=^[^`]*)\bcss`(.*?)`/gms
export const VIRTUAL_PREFIX = 'virtual:rawstyle/'
export const RESOLVED_PREFIX = `\0${VIRTUAL_PREFIX}`

export const css: CssFn = () => ''
export const cn: CnFn = () => ''