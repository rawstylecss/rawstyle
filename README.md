<div align="center">
	<img alt="logo" src="https://raw.githubusercontent.com/voicss/voicss/refs/heads/assets/logo.svg">
	<br>
	A lightweight compile-time <b>CSS-in-TS library</b> for React
	<br><br>
	<p>
		<a href="https://www.npmjs.com/package/voicss"><img src="https://img.shields.io/npm/v/voicss?style=flat-square&logo=npm&label=npm&labelColor=453038&color=E6DACA" alt="npm version"/></a>&nbsp;
		<a href="https://github.com/voicss/voicss/issues?q=is%3Aissue+is%3Aopen+label%3Abug"><img src="https://img.shields.io/github/issues/voicss/voicss/bug?style=flat-square&label=%F0%9F%90%9B%20Bugs&labelColor=453038&color=E6DACA" alt="bugs"></a>&nbsp;
		<a href="https://github.com/voicss/voicss/blob/master/LICENSE"><img src="https://img.shields.io/github/license/voicss/voicss?style=flat-square&label=%F0%9F%9B%A1%EF%B8%8F%20License&labelColor=453038&color=E6DACA" alt="license"></a>&nbsp;
	</p>
	<p><b>
		<a href="#-overview">Overview</a>&nbsp; •&nbsp;
		<a href="#-quick-start">Quick Start</a>&nbsp; •&nbsp;
		<a href="#%EF%B8%8F-usage">Usage</a>
	</b></p>
	<img alt="demo" src="https://raw.githubusercontent.com/voicss/voicss/refs/heads/assets/demo.png">
</div>

## 👀 Overview
**Voicss** (/vɔɪs/) is a compile-time CSS-in-TS library that brings a **fully native CSS experience** directly into `.ts(x)` files. 

Its core is just [one line of code](packages/voicss/src/index.ts), and styling is done via the `` void `css ...` `` block syntax.

### 🔥 Features
- **⚡ True Zero Runtime:** styles are extracted at build time, no JS in production
- **💎 Native CSS:** write standard CSS with all modern features
- **📦 Modern Bundlers:** first-class support for Next.js and Vite
- **🔥 HMR:** instant style updates during development
- **🧩 [VS Code Extension](https://github.com/voicss/voicss-vscode):** syntax highlighting, autocomplete, validation, and more
- **🧹 [ESLint Plugin](https://github.com/voicss/voicss-eslint):** CSS linting in template literals

## 🏁 Quick Start
Scaffold a [demo project](templates) for your platform (Next.js/Vite/tsdown):
```bash
bun create voicss
```

## 🕹️ Usage
### 1. Install core and a bundler plugin:
```bash
bun add -D voicss @voicss/next  # for Next.js
bun add -D voicss @voicss/vite  # for Vite
```

### 2. Configure the bundler to use the plugin:
#### Next.js
```ts
// next.config.ts
import type { NextConfig } from 'next'
import { voicssTurboRule } from '@voicss/next'

export default {
	turbopack: { rules: { ...voicssTurboRule } },
} satisfies NextConfig
```

#### Vite
```ts
// vite.config.ts
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import voicss from '@voicss/vite'

export default {
	plugins: [react(), voicss()],
} satisfies UserConfig
```

### 3. Start styling
Write standard CSS inside your `.ts(x)` files using the `` void `css ...` `` syntax.
The bundler extracts these blocks into real CSS at build time — resulting in zero runtime overhead.