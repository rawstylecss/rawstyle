import { createRoot } from 'react-dom/client'
import App from '@/app'

createRoot(document.getElementById('root')!).render(<App/>)

void `css
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