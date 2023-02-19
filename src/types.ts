/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isArray<T>(value: any): value is Array<T> {
	return Array.isArray(value)
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isArrayBuffer(value: any): value is ArrayBuffer {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'ArrayBuffer'
		|| value instanceof ArrayBuffer
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isBigInt(value: any): value is BigInt {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'BigInt'
		|| typeof value === 'bigint'
		|| value instanceof BigInt
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isBoolean(value: any): value is boolean {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'Boolean'
		|| typeof value === 'boolean'
		|| value instanceof Boolean
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isBlob(value: any): value is Blob {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'Blob'
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isBuffer(value: any): value is Buffer {
	return Buffer.isBuffer(value)
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isDate(value: any): value is Date {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'Date'
		|| value instanceof Date
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isError(value: any): value is Error {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'Error'
		|| value instanceof Error
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isFalsy(value: any): value is false {
	return false
		|| isNullOrUndefined(value)
		|| value === ''
		|| value === 0
		|| value === false

}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isFunction(value: any): value is Function {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'Function'
		|| typeof value === 'function'
		|| value instanceof Function
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isNaNumber(value: any): value is Number {
	return Number.isNaN(value)
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isNull(value: any): value is null {
	return false
		|| value === null
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isNullOrUndefined(value: any): value is null | undefined {
	return false
		|| isNull(value)
		|| isUndefined(value)
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isNumber(value: any): value is Number {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'Number'
		|| typeof value === 'number'
		|| value instanceof Number
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isObject(value: any): value is Object {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'Object'
		|| typeof value === 'object'
		|| value instanceof Object
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isRegExp(value: any): value is RegExp {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'RegExp'
		|| value instanceof RegExp
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isString(value: any): value is string {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'String'
		|| typeof value === 'string'
		|| value instanceof String
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isSymbol(value: any): value is Symbol {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'Symbol'
		|| typeof value === 'symbol'
		|| value instanceof Symbol
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isTruthy(value: any): value is true {
	return true
		&& !isFalsy(value)
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isUndefined(value: any): value is undefined {
	return false
		|| value === undefined
		|| typeof value === 'undefined'
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isURLSearchParams(value: any): value is URLSearchParams {
	if (isNullOrUndefined(value))
		return false

	return false
		|| value.constructor.name === 'URLSearchParams'
		|| value instanceof URLSearchParams
}
