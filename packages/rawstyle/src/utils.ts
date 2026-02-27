import crypto from 'node:crypto'

export const generateHash = (str: string): string =>
	crypto.createHash('md5').update(str).digest('hex').slice(0, 5)

export function dedent(tpl: TemplateStringsArray, ...vals: unknown[]): string
export function dedent(str: string, targetIndent?: number): string
export function dedent(tplOrStr: TemplateStringsArray | string, ...rest: unknown[]): string {
	let raw: string, targetIndent = 0

	if (typeof tplOrStr === 'string') [raw, targetIndent] = [tplOrStr, (rest[0] as number | undefined) ?? 0]
	// eslint-disable-next-line @typescript-eslint/no-base-to-string
	else raw = tplOrStr.reduce((acc, str, i) => `${acc}${str}${rest[i] ?? ''}`, '')

	const detectedIndent = (/^([^\n]*?)\S/m.exec(raw))?.[1].length ?? 0
	const removeIndent = detectedIndent - targetIndent

	return raw.split('\n').map(l => l.slice(removeIndent)).join('\n').trim()
}