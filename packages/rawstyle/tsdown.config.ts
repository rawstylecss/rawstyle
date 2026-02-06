import type { UserConfig } from 'tsdown'
// @ts-expect-error: allow importing with '.ts' extension
import baseConfig from '../../tsdown.config.ts'

export default {
	...baseConfig,
	entry: ['src/index.ts', 'src/transformer.ts'],
	copy: 'src/globals.d.ts',
} satisfies UserConfig