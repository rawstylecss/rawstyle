<div align="center">
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset=".github/logo-light.png">
		<img alt="logo" src=".github/logo-dark.png">
	</picture>
	<br>
	A lightweight compile-time <b>CSS-in-JS library</b> for React apps
	<br><br>
	<p>
		<a href="https://www.npmjs.com/package/rawstyle"><img src="https://img.shields.io/npm/v/rawstyle?label=npm&logo=npm&style=flat-square&color=c8c9f1&labelColor=303145" alt="npm version"/></a>&nbsp;
		<a href="https://www.npmjs.com/package/rawstyle"><img src="https://img.badgesize.io/https://unpkg.com/rawstyle/dist/index.js?label=Size&logo=hackthebox&logoColor=c97026&style=flat-square&color=c8c9f1&labelColor=303145" alt="bundle size"/></a>&nbsp;
		<a href="https://github.com/rawstylecss/rawstyle/issues?q=is%3Aissue+is%3Aopen+label%3Abug"><img src="https://img.shields.io/github/issues/rawstylecss/rawstyle/bug?label=%F0%9F%90%9B%20Bugs&style=flat-square&color=c8c9f1&labelColor=303145" alt="bugs"></a>
	</p>
	<p><b>
		<a href="#-features">Features</a>&nbsp; •&nbsp;
		<a href="#-quick-start">Quick Start</a>&nbsp; •&nbsp;
		<a href="#%EF%B8%8F-setup">Setup</a>&nbsp; •&nbsp;
		<a href="#%EF%B8%8F-usage">Usage</a>&nbsp; •&nbsp;
		<a href="#-api">API</a>&nbsp; •&nbsp;
		<a href="#-ecosystem">Ecosystem</a>
	</b></p>
	<img alt="demo" src=".github/demo.png">
</div>

## 🔥 Features

- **⚡ True Zero Runtime:** styles are extracted at compile-time, no JS in production
- **💎 Native CSS:** write regular CSS with all modern features
- **📦 Modern Bundlers:** built-in support for Next.js (Turbopack) and Vite (Rolldown)
- **🔥 Hot Reload:** instant CSS updates during development
- **🌐 Global Types:** eliminate the need to import `css` in every module
- **🧩 [VS Code Extension](https://github.com/rawstylecss/rawstyle-vscode):** syntax highlighting, validation, autocompletion, tooltips, and more
- **🧹 [ESLint Plugin](https://github.com/rawstylecss/rawstyle-eslint):** auto-fixable formatting rules for CSS inside templates

## 🚀 Quick Start

No need to read further, just try it out:

```bash
bun create rawstyle  # scaffold a demo project for your chosen platform
```

## ⚙️ Setup

1. Install the сore and the appropriate bundler plugin:

```bash
bun add -D rawstyle @rawstyle/next  # for Next.js
bun add -D rawstyle @rawstyle/vite  # for Vite
```
2. Configure the bundler to use the plugin:

### Next.js (Turbopack)

```ts
// next.config.ts
import { rawstyleTurboRule } from '@rawstyle/next'
import type { NextConfig } from 'next'

export default {
	turbopack: { rules: { ...rawstyleTurboRule } },
} satisfies NextConfig
```
> The loader extracts CSS and injects it into the module as a base64-encoded CSS import.

### Vite (Rolldown)

```ts
// vite.config.ts
import react from '@vitejs/plugin-react'
import rawstyle from '@rawstyle/vite'
import type { UserConfig } from 'rolldown-vite'

export default {
	plugins: [react(), rawstyle()],
} satisfies UserConfig
```
> The plugin emits a virtual `.css` module containing extracted styles and imports it as a side effect.

## 🕹️ Usage

### Import-based

```tsx
import { css, cn } from 'rawstyle'
```
### Global types

You can make the `css` and `cn` type declarations global to avoid importing them in every module:

```jsonc
// via tsconfig.json:
"compilerOptions": {
	"types": ["rawstyle"]
}
```

## 🧩 API

Rawstyle provides two core primitives: `css` and `cn`:

```tsx
// src/module.tsx
export const Component = ({ theme }: { theme: string }) => (
	// `cn` - class names merging utility
	<div className={cn('class', theme === 'dark' && card)}>
		Hello, World!
	</div>
)
// `css` assigned to a variable - generates scoped CSS
const card = css`
	padding: 1rem;
	color: var(--primary);
	&:hover { box-shadow: 0 4px 12px black; }
`
// `css` as a standalone expression - generates global CSS
void css`
	:root { --primary: #303030; }
	body { margin: 0; background: #ebebeb; }
`
```

This code compiles to:

```tsx
import '\0virtual.css'

export const Component = ({ theme }: { theme: string }) => (
	<div className={['class', theme === 'dark' && card].filter(Boolean).join(' ')}>
		Hello, World!
	</div>
)

const card = 'card_hash5'
```
As you can see, the `css` template literal is replaced with a hashed class name, `cn` is transformed into a conditional string joiner, and the CSS is extracted into a separate virtual `.css` file:

```css
/* virtual.css */
:root { --primary: #303030; }
body { margin: 0; background: #ebebeb; }

.card_hash5 {
	padding: 1rem;
	color: var(--primary);
	&:hover { box-shadow: 0 4px 12px black; }
}
```

## 🧩 Ecosystem

[**Rawstyle**](https://github.com/rawstylecss) provides a suite of tools to enhance your development experience:
- [VS Code Extension 🡥](https://github.com/rawstylecss/rawstyle-vscode)
- [ESLint Plugin 🡥](https://github.com/rawstylecss/rawstyle-eslint)