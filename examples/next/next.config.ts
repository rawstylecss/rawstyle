import { rawstyleTurboRule } from '@rawstyle/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	turbopack: { rules: { ...rawstyleTurboRule } },
}

export default nextConfig