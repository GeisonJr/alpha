/* Dependencies */
import fs from 'fs'
import path from 'path'

/* Types */
export interface FileStats {
	/**
	 * @description Dirname
	 * @example
	 * ```ts
	 * // dir: 'C:\\dev\\project'
	 * // file: 'C:\\dev\\project\\src\\subdir\\index.ts'
	 * return 'C:\\dev\\project\\src\\subdir'
	 * ```
	 */
	dir: string
	/**
	 * @description Extension name
	 * @example
	 * ```ts
	 * // dir: 'C:\\dev\\project'
	 * // file: 'C:\\dev\\project\\src\\subdir\\index.ts'
	 * return '.ts'
	 * ```
	 */
	ext: string
	/**
	 * @description Filename (without extension)
	 * @example
	 * ```ts
	 * // dir: 'C:\\dev\\project'
	 * // file: 'C:\\dev\\project\\src\\subdir\\index.ts'
	 * return 'index'
	 * ```
	 */
	name: string
	/**
	 * @description Absolute path
	 * @example
	 * ```ts
	 * // dir: 'C:\\dev\\project'
	 * // file: 'C:\\dev\\project\\src\\subdir\\index.ts'
	 * return 'C:\\dev\\project\\src\\subdir\\index.ts'
	 * ```
	 */
	path: string
	/**
	 * @description Relative
	 * @example
	 * ```ts
	 * // dir: 'C:\\dev\\project'
	 * // file: 'C:\\dev\\project\\src\\subdir\\index.ts'
	 * return 'src\\subdir'
	 * ```
	 */
	subdir: string
	/**
	 * @description Stats from fs module
	 * @see https://nodejs.org/api/fs.html#fs_class_fs_stats
	 */
	stats: fs.Stats
}

/**
 * @description This function returns all files in a directory/subdirectories
 * @returns
 * ```ts
 * throughDirectory('C:\\dev\\project')
 * return [{
 *   path: 'C:\\dev\\project\\src\\subdir\\index.ts',
 *   dir: 'C:\\dev\\project\\src\\subdir',
 *   subdir: 'src\\subdir',
 *   name: 'index',
 *   ext: '.ts',
 *   stats: fs.Stats
 * }, ...]
 * ```
 * @version 1.0.0
 * @since 1.0.0
 */
export function throughDirectory(dirname: string): FileStats[] {
	const files: FileStats[] = []

	// Read all files in the directory and subdirectories
	function recurse(dir: string): void {
		const dirFiles = fs.readdirSync(dir)

		for (const file of dirFiles) {
			const absolutePath = path.join(dir, file)
			const fsStats = fs.statSync(absolutePath)

			// If is a directory call the function again
			if (fsStats.isDirectory()) {
				recurse(absolutePath)
				continue
			}

			// If is a file add to the list
			const anatomy = path.parse(absolutePath)
			files.push({
				path: absolutePath,
				dir: anatomy.root + anatomy.dir,
				subdir: absolutePath
					.replace(dirname, '')
					.replace(anatomy.base, ''),
				name: anatomy.name,
				ext: anatomy.ext,
				stats: fsStats
			})
		}
	}
	recurse(dirname)

	return files
}
