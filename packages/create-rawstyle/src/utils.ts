import { cancel, isCancel } from '@clack/prompts'

export const handleCancel: <T>(value: T | symbol) => asserts value is T = value => {
	if (!isCancel(value)) return
	cancel('Operation cancelled')
	process.exit(0)
}