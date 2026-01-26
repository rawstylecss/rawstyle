import { rawstyleTurboRule } from '@rawstyle/next'
import type { NextConfig } from 'next'

export default {
	turbopack: { rules: { ...rawstyleTurboRule } },
} satisfies NextConfig