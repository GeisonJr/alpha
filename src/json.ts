/**
 * @description Replace all cycular references with a "[Circular]"
 * @version 1.0.0
 * @since 1.0.0
 */
export function decycle(obj: object): string {
	const seen = new Set()

	return JSON.stringify(obj, (_key, value) => {
		if (typeof value === 'object') {
			if (seen.has(value))
				return '[Circular]'

			seen.add(value)
		}

		return value
	})
}
