import { createRoot } from 'react-dom/client'
import App from '@/app'

const root = document.getElementById('root')
if (root) createRoot(root).render(<App/>)

void css`
	:root {
		--background: #ebebeb;
		--foreground: #303030;
	}

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