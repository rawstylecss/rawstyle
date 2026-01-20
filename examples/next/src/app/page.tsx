import { css } from 'rawstyle'

export default function App() {
	return <h1 className={title}>Rawstyle<br/>Next</h1>
}

const title = css`
	font-size: 14rem;
	font-family: "Tiny5", sans-serif;
	color: var(--foreground);
	text-align: center;
	text-transform: uppercase;
	letter-spacing: -1rem;
	line-height: 0.7;
`