import { createRoot } from 'react-dom/client'
import { globals } from 'rawstyle'
import App from '@/app'

const root = document.getElementById('root')
if (root) createRoot(root).render(<App/>)

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