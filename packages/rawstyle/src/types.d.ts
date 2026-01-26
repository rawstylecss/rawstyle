export interface TransformResult {
	transformed: string
	css: string
}

export interface CssVarRef {
	name: string
	start: number
	end: number
}

export interface CssVarDecl {
	name: string
	tag: string
	template: string
	start: number
	end: number
}

export interface Replacement {
	start: number
	end: number
	replacement: string
}