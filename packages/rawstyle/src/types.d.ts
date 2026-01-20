export interface TransformResult {
	transformedCode: string
	extractedCss: string
}

export interface ClassNameId {
	name: string
	start: number
	end: number
}

export interface CssVar {
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