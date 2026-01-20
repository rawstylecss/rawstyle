import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	turbopack: { rules: { '**/*.tsx': { loaders: ['@rawstyle/next'] } } },
}

export default nextConfig