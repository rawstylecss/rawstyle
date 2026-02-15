# Changelog


## &ensp; [` 📦 rawstyle@0.5.0  `](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.4.2...rawstyle@0.5.0)

### &emsp; 🧨 BREAKING CHANGES
- **Class name suffix stripping**: CSS class names generated from variables ending with `css`, `style`, or `styles` now have these suffixes removed, resulting in more concise class names. [🡥](https://github.com/rawstylecss/rawstyle/commit/1dbbfd3)

### &emsp; ⚙️ Internal
- **Simplified template replacement**: only the `css` template literal is replaced, not the entire variable declaration and its usages. [🡥](https://github.com/rawstylecss/rawstyle/commit/ac758be)

##### &emsp;&emsp; [Full Changelog](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.4.2...rawstyle@0.5.0) &ensp;•&ensp; Feb 15, 2026


## &ensp; [` 📦 rawstyle@0.4.2  `](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.4.1...rawstyle@0.4.2)

### &emsp; 🩹 Fixes
- **Cleaner extracted CSS output**: transformer now strips unnecessary left indentation from CSS template strings for cleaner output. [🡥](https://github.com/rawstylecss/rawstyle/commit/4f89b57)

##### &emsp;&emsp; [Full Changelog](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.4.1...rawstyle@0.4.2) &ensp;•&ensp; Feb 9, 2026


## &ensp; [` 📦 rawstyle@0.4.1  `](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.4.0...rawstyle@0.4.1)

### &emsp; 📚 Documentation
- **Detailed documentation & visuals**: added a usage guide, API examples, logo, and demo image to the README. [🡥](https://github.com/rawstylecss/rawstyle/commit/e932a75)

##### &emsp;&emsp; [Full Changelog](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.4.0...rawstyle@0.4.1) &ensp;•&ensp; Feb 8, 2026


## &ensp; [` 📦 rawstyle@0.4.0  `](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.3.0...rawstyle@0.4.0)

### &emsp; 🧨 BREAKING CHANGES
- **Transform export split**: the `transform` function is now exported from `rawstyle/transformer` to avoid bundling `oxc-parser` when importing from `rawstyle`. [🡥](https://github.com/rawstylecss/rawstyle/commit/304428c)

##### &emsp;&emsp; [_Full Changelog_](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.3.0...rawstyle@0.4.0) &ensp;•&ensp; _Feb 2, 2026_


## &ensp; [` 📦 rawstyle@0.3.0  `](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.2.0...rawstyle@0.3.0)

### &emsp; 🎁 Features
- **Tagged template pattern export**: added `TEMPLATE_PATTERN` export to enable consistent detection of Rawstyle tagged templates across related projects. [🡥](https://github.com/rawstylecss/rawstyle/commit/fcb83be)

##### &emsp;&emsp; [_Full Changelog_](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.2.0...rawstyle@0.3.0) &ensp;•&ensp; _Feb 2, 2026_


## &ensp; [` 📦 rawstyle@0.2.0  `](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.1.0...rawstyle@0.2.0)

### &emsp; 🧨 BREAKING CHANGES
- **Renamed `TransformResult` fields**: the `TransformResult` interface now uses `transformed` and `css` fields instead of `transformedCode` and `extractedCss`. [🡥](https://github.com/rawstylecss/rawstyle/commit/42d7d6e)
- **No implicit `:root` in `gcss`**: the `gcss` template no longer wraps content in `:root` by default. [🡥](https://github.com/rawstylecss/rawstyle/commit/2dda221)
- **Renamed `globals` to `gcss`**: the global CSS template tag has been renamed from `globals` to `gcss`. [🡥](https://github.com/rawstylecss/rawstyle/commit/f806102)

### &emsp; 🎁 Features
- **Conditional class name utility**: added a `cn` function for convenient conditional joining of multiple class names. [🡥](https://github.com/rawstylecss/rawstyle/commit/7ffdac9)
- **Global types**: added `rawstyle/globals` types entry for global usage of `css`, `gcss`, and `cn` functions, available via `/// <reference types="rawstyle/globals" />` or `tsconfig.types`. [🡥](https://github.com/rawstylecss/rawstyle/commit/fdc90bc)
- **Exposed `TRANSFORMABLE_EXT`**: the `TRANSFORMABLE_EXT` constant is now available for plugin usage. [🡥](https://github.com/rawstylecss/rawstyle/commit/04023bb)
- **Expanded supported transformable extensions**: included `.jsx`, `.ts`, and `.js` in `TRANSFORMABLE_EXT` for broader file support. [🡥](https://github.com/rawstylecss/rawstyle/commit/0342b9e)

### &emsp; 🩹 Fixes
- **Multiple className references handling**: all occurrences of a `cssVar` in `className` are now replaced, not just the first match. [🡥](https://github.com/rawstylecss/rawstyle/commit/857bb18)

##### &emsp;&emsp; [_Full Changelog_](https://github.com/rawstylecss/rawstyle/compare/rawstyle@0.1.0...rawstyle@0.2.0) &ensp;•&ensp; _Jan 26, 2026_


## &ensp; [` 📦 rawstyle@0.1.0  `](https://github.com/rawstylecss/rawstyle/commits/rawstyle@0.1.0)

### &emsp; 🎁 Features
- **Initial CSS-in-JS extraction engine**: implemented `transform` function to parse source code and extract CSS from tagged templates, replacing styled variable references with hashed class names. [🡥](https://github.com/rawstylecss/rawstyle/commit/9b0ad1c)
- **Global styles support**: added `globals` function to handle global CSS variables and apply them to `:root`. [🡥](https://github.com/rawstylecss/rawstyle/commit/b6a028a)

##### &emsp;&emsp; [_Full Changelog_](https://github.com/rawstylecss/rawstyle/commits/rawstyle@0.1.0) &ensp;•&ensp; _Jan 24, 2026_