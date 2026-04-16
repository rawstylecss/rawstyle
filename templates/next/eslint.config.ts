import { defineConfig, globalIgnores } from 'eslint/config'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintReact from '@eslint-react/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import nextEslint from '@next/eslint-plugin-next'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
	globalIgnores(['dist', '.next', 'next-env.d.ts']),
	{
		name: 'Base Rules',
		files: ['**/*.ts?(x)'],
		extends: [eslint.configs.recommended],
	},
	{
		name: 'Type-Aware Rules',
		files: ['**/*.ts?(x)'],
		extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
		languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
		rules: { '@typescript-eslint/restrict-template-expressions': 'off' }
	},
	{
		name: 'React Rules',
		files: ['**/*.ts?(x)'],
		settings: { react: { version: 'detect' } },
		extends: [
			reactHooks.configs.flat.recommended,
			eslintReact.configs['recommended-type-checked'],
			nextEslint.configs.recommended,
			nextEslint.configs['core-web-vitals'],
		],
	},
	{
		name: 'Stylistic Rules',
		files: ['**/*.ts?(x)'],
		extends: [stylistic.configs.recommended],
		rules: {
			'@stylistic/no-tabs': 'off',
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'@stylistic/brace-style': ['error', '1tbs'],
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@stylistic/comma-dangle': ['error', 'only-multiline'],
			'@stylistic/eol-last': ['error', 'never'],
			'@stylistic/jsx-indent-props': ['error', 'tab'],
			'@stylistic/jsx-one-expression-per-line': 'off',
			'@stylistic/jsx-tag-spacing': ['error', { beforeClosing: 'never', beforeSelfClosing: 'never' }],
			'@stylistic/jsx-wrap-multilines': 'off',
			'@stylistic/jsx-closing-tag-location': 'off',
			'@stylistic/jsx-closing-bracket-location': 'off',
			'@stylistic/jsx-quotes': ['error', 'prefer-single'],
		},
	},
])