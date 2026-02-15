export interface TransformResult {
	transformed: string
	css: string
}

export interface Replacement {
	start: number
	end: number
	replacement: string
}