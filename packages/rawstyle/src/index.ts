export const TRANSFORMABLE_EXT = /\.(tsx|jsx|ts|js)$/
export const TEMPLATE_PATTERN = /\bcss`(.*?)`/gs
export const VIRTUAL_PREFIX = 'virtual:rawstyle/'
export const RESOLVED_PREFIX = `\0${VIRTUAL_PREFIX}`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const css = (str: TemplateStringsArray) => ''
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const cn = (...classes: (string | boolean)[]) => ''