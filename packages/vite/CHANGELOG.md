# Changelog


## &ensp; [` 📦 @rawstyle/vite@0.5.0  `](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.4.0...@rawstyle/vite@0.5.0)

### &emsp; 🧨 BREAKING CHANGES
- **Rawstyle dependency update**: the plugin now requires `rawstyle` version `>=0.7` as a peer dependency. [🡥](https://github.com/rawstylecss/rawstyle/commit/2306909)
- **Switched to Vite peer dependency**: the `rolldown-vite` peer dependency has been replaced with `vite`, reflecting the default Rolldown integration in Vite v8+. [🡥](https://github.com/rawstylecss/rawstyle/commit/f29e09c)

##### &emsp;&emsp; [Full Changelog](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.4.0...@rawstyle/vite@0.5.0) &ensp;•&ensp; Apr 8, 2026


## &ensp; [` 📦 @rawstyle/vite@0.4.0  `](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.3.2...@rawstyle/vite@0.4.0)

### &emsp; 🧨 BREAKING CHANGES
- **Rawstyle dependency update**: the minimum required version of `rawstyle` has been updated to 0.6. [🡥](https://github.com/rawstylecss/rawstyle/commit/ee2a9a4)

### &emsp; ⚙️ Internal
- **Package description**: improved package metadata to better reflect the package's purpose. [🡥](https://github.com/rawstylecss/rawstyle/commit/9f52fec)

##### &emsp;&emsp; [Full Changelog](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.3.2...@rawstyle/vite@0.4.0) &ensp;•&ensp; Feb 28, 2026


## &ensp; [` 📦 @rawstyle/vite@0.3.2  `](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.3.1...@rawstyle/vite@0.3.2)

### &emsp; 🩹 Fixes
- **Skip virtual CSS for empty output**: virtual CSS is now only imported when CSS is actually generated, preventing unnecessary imports for files without extracted CSS. [🡥](https://github.com/rawstylecss/rawstyle/commit/6092b8a)

##### &emsp;&emsp; [Full Changelog](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.3.1...@rawstyle/vite@0.3.2) &ensp;•&ensp; Feb 10, 2026


## &ensp; [` 📦 @rawstyle/vite@0.3.1  `](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.3.0...@rawstyle/vite@0.3.1)

### &emsp; 🩹 Fixes
- **Normalized import paths**: virtual CSS import paths are now normalized to prevent WinAPI errors with backslashes. [🡥](https://github.com/rawstylecss/rawstyle/commit/77fc18a)

##### &emsp;&emsp; [Full Changelog](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.3.0...@rawstyle/vite@0.3.1) &ensp;•&ensp; Feb 9, 2026


## &ensp; [` 📦 @rawstyle/vite@0.3.0  `](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.2.0...@rawstyle/vite@0.3.0)

### &emsp; 🧨 BREAKING CHANGES
- **Rawstyle v0.4 peer update**: migrated to Rawstyle v0.4 API and bumped peer requirement to `rawstyle` >=0.4. [🡥](https://github.com/rawstylecss/rawstyle/commit/1f7ee48)

##### &emsp;&emsp; [Full Changelog](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.2.0...@rawstyle/vite@0.3.0) &ensp;•&ensp; Feb 2, 2026


## &ensp; [` 📦 @rawstyle/vite@0.2.0  `](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.1.0...@rawstyle/vite@0.2.0)

### &emsp; 🧨 BREAKING CHANGES
- **Migrated to Rawstyle v0.2 API**: the plugin now works with the updated Rawstyle API and requires `rawstyle` >=0.2 as a peer dependency. [🡥](https://github.com/rawstylecss/rawstyle/commit/b374def)

##### &emsp;&emsp; [_Full Changelog_](https://github.com/rawstylecss/rawstyle/compare/@rawstyle/vite@0.1.0...@rawstyle/vite@0.2.0) &ensp;•&ensp; _Jan 26, 2026_


## &ensp; [` 📦 @rawstyle/vite@0.1.0  `](https://github.com/rawstylecss/rawstyle/commits/@rawstyle/vite@0.1.0)

### &emsp; 🎁 Features
- **Vite integration**: introduced a Vite plugin that extracts CSS via Rawstyle and injects it with HMR support. [🡥](https://github.com/rawstylecss/rawstyle/commit/5e144e5)

##### &emsp;&emsp; [_Full Changelog_](https://github.com/rawstylecss/rawstyle/commits/@rawstyle/vite@0.1.0) &ensp;•&ensp; _Jan 24, 2026_