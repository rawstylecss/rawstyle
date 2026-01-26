export interface TransformResult {
	transformedCode: string
	extractedCss: string
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