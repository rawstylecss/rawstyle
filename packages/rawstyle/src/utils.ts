import crypto from 'node:crypto'

export const generateHash = (str: string): string =>
	crypto.createHash('md5').update(str).digest('hex').slice(0, 5)