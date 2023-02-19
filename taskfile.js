/* Dependencies */
import { writeFileSync } from 'fs'

const DIST_DIR = 'dist'
const COMMON_DIR = DIST_DIR + '/common'
const MODULE_DIR = DIST_DIR + '/module'

const COMMON_TYPE = 'commonjs'
const MODULE_TYPE = 'module'

export async function clear(task) {
	await task
		.clear(DIST_DIR)
}

export async function build(task, opts) {
	await task.
		serial([
			'compile'
		], opts)
}

export async function release(task) {
	await task
		.start('clear')
		.start('build')
}

export async function compile(task, opts) {
	await task
		.parallel([
			'src'
		], opts)
		.serial([
			'pkg'
		], opts)
}

export async function src(task, opts) {
	opts = {
		...opts,
		src: opts.src ?? 'src/**/*.+(js|ts)',
		common_dir: opts.common_dir ?? COMMON_DIR,
		module_dir: opts.module_dir ?? MODULE_DIR,
		dev: opts.dev ?? false,
	}

	await task
		.source(opts.src)
		.swc('server', opts)
		.target(opts.common_dir)

	await task
		.source(opts.src)
		.swc('server', { ...opts, esm: true })
		.target(opts.module_dir)
}

export async function pkg(_task, _opts) {
	writeFileSync(COMMON_DIR + '/package.json', JSON.stringify({
		type: COMMON_TYPE,
	}), 'utf8')

	writeFileSync(MODULE_DIR + '/package.json', JSON.stringify({
		type: MODULE_TYPE,
	}), 'utf8')
}
