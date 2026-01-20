import type { Metadata } from 'next'
import { Tiny5 } from 'next/font/google'
import { globals } from 'rawstyle'

export const metadata: Metadata = { title: 'Rawstyle + Next' }
const tiny5 = Tiny5({ variable: '--font-tiny5', weight: '400' })

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={tiny5.variable}>{children}</body>
		</html>
	)
}

void globals`
	--background: #d5cdc0;
	--foreground: #41342a;

	body {
		background-color: var(--background);
		height: 100vh;
		overflow: hidden;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`