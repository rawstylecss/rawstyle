import { cancel, isCancel } from '@clack/prompts'
import { readFileSync, writeFileSync } from 'node:fs'

export const handleCancel: <T>(value: T | symbol) => asserts value is T = value => {
	if (!isCancel(value)) return
	cancel('Operation cancelled')
	process.exit(0)
}

export const resolveLinkedDeps = async (dir: string) => {
	const pkgJson = readFileSync(`${dir}/package.json`, 'utf8')
	const matches = [...pkgJson.matchAll(/"(.*)": "link:.*/g)]
	let updatedPkgJson = pkgJson
	for (const [match, pkg] of matches) {
		const latestPkgVersion = await getLatestPkgVersion(pkg)
		updatedPkgJson = updatedPkgJson.replace(match, `"${pkg}": "^${latestPkgVersion}",`)
	}
	writeFileSync(`${dir}/package.json`, updatedPkgJson, 'utf8')
}

const getLatestPkgVersion = async (pkgName: string): Promise<string> => {
	const res = await fetch(`https://registry.npmjs.org/${pkgName}`)
	const data = await res.json() as { 'dist-tags': { latest: string } }
	return data['dist-tags'].latest
}