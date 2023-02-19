import { isArray, isArrayBuffer, isBigInt, isBlob, isBoolean, isBuffer, isDate, isError, isFalsy, isFunction, isNaNumber, isNull, isNullOrUndefined, isNumber, isObject, isRegExp, isString, isSymbol, isTruthy, isUndefined, isURLSearchParams } from '@/types'

describe('isArray', () => {
	it('should return true for an array input', () => {
		expect(isArray([])).toBe(true)
		expect(isArray([0])).toBe(true)
		expect(isArray([''])).toBe(true)
		expect(isArray([{}])).toBe(true)
		expect(isArray([[]])).toBe(true)
		expect(isArray([null])).toBe(true)
		expect(isArray([false])).toBe(true)
		expect(isArray([undefined])).toBe(true)
	})

	it('should return false for a non-array input', () => {
		expect(isArray(0)).toBe(false)
		expect(isArray('')).toBe(false)
		expect(isArray({})).toBe(false)
		expect(isArray(null)).toBe(false)
		expect(isArray(false)).toBe(false)
		expect(isArray(undefined)).toBe(false)
	})
})

describe('isArrayBuffer', () => {
	it('should return true for an array buffer input', () => {
		expect(isArrayBuffer(new ArrayBuffer(8))).toBe(true)
	})

	it('should return false for a non-array buffer input', () => {
		expect(isArrayBuffer(0)).toBe(false)
		expect(isArrayBuffer('')).toBe(false)
		expect(isArrayBuffer({})).toBe(false)
		expect(isArrayBuffer([])).toBe(false)
		expect(isArrayBuffer(null)).toBe(false)
		expect(isArrayBuffer(false)).toBe(false)
		expect(isArrayBuffer(undefined)).toBe(false)
	})
})

describe('isBigInt', () => {
	it('should return true for a big int input', () => {
		expect(isBigInt(BigInt(0))).toBe(true)
	})

	it('should return false for a non-big int input', () => {
		expect(isBigInt(0)).toBe(false)
		expect(isBigInt('')).toBe(false)
		expect(isBigInt({})).toBe(false)
		expect(isBigInt([])).toBe(false)
		expect(isBigInt(null)).toBe(false)
		expect(isBigInt(false)).toBe(false)
		expect(isBigInt(undefined)).toBe(false)
	})
})

describe('isBlob', () => {
	it('should return true for a blob input', () => {
		expect(isBlob(new Blob())).toBe(true)
	})

	it('should return false for a non-blob input', () => {
		expect(isBlob(0)).toBe(false)
		expect(isBlob('')).toBe(false)
		expect(isBlob({})).toBe(false)
		expect(isBlob([])).toBe(false)
		expect(isBlob(null)).toBe(false)
		expect(isBlob(false)).toBe(false)
		expect(isBlob(undefined)).toBe(false)
	})
})

describe('isBoolean', () => {
	it('should return true for a boolean input', () => {
		expect(isBoolean(true)).toBe(true)
		expect(isBoolean(false)).toBe(true)
	})

	it('should return false for a non-boolean input', () => {
		expect(isBoolean(0)).toBe(false)
		expect(isBoolean('')).toBe(false)
		expect(isBoolean({})).toBe(false)
		expect(isBoolean([])).toBe(false)
		expect(isBoolean(null)).toBe(false)
		expect(isBoolean(undefined)).toBe(false)
	})
})

describe('isBuffer', () => {
	it('should return true for a buffer input', () => {
		expect(isBuffer(Buffer.from(''))).toBe(true)
	})

	it('should return false for a non-buffer input', () => {
		expect(isBuffer(0)).toBe(false)
		expect(isBuffer('')).toBe(false)
		expect(isBuffer({})).toBe(false)
		expect(isBuffer([])).toBe(false)
		expect(isBuffer(null)).toBe(false)
		expect(isBuffer(false)).toBe(false)
		expect(isBuffer(undefined)).toBe(false)
	})
})

describe('isDate', () => {
	it('should return true for a date input', () => {
		expect(isDate(new Date())).toBe(true)
	})

	it('should return false for a non-date input', () => {
		expect(isDate(0)).toBe(false)
		expect(isDate('')).toBe(false)
		expect(isDate({})).toBe(false)
		expect(isDate([])).toBe(false)
		expect(isDate(null)).toBe(false)
		expect(isDate(false)).toBe(false)
		expect(isDate(undefined)).toBe(false)
	})
})

describe('isError', () => {
	it('should return true for an error input', () => {
		expect(isError(new Error())).toBe(true)
	})

	it('should return false for a non-error input', () => {
		expect(isError(0)).toBe(false)
		expect(isError('')).toBe(false)
		expect(isError({})).toBe(false)
		expect(isError([])).toBe(false)
		expect(isError(null)).toBe(false)
		expect(isError(false)).toBe(false)
		expect(isError(undefined)).toBe(false)
	})
})

describe('isFalsy', () => {
	it('should return true for a falsy input', () => {
		expect(isFalsy(0)).toBe(true)
		expect(isFalsy('')).toBe(true)
		expect(isFalsy(null)).toBe(true)
		expect(isFalsy(false)).toBe(true)
		expect(isFalsy(undefined)).toBe(true)
	})

	it('should return false for a non-falsy input', () => {
		expect(isFalsy(1)).toBe(false)
		expect(isFalsy('a')).toBe(false)
		expect(isFalsy({})).toBe(false)
		expect(isFalsy([])).toBe(false)
		expect(isFalsy(true)).toBe(false)
	})
})

describe('isFunction', () => {
	it('should return true for a function input', () => {
		expect(isFunction(() => {})).toBe(true)
	})

	it('should return false for a non-function input', () => {
		expect(isFunction(0)).toBe(false)
		expect(isFunction('')).toBe(false)
		expect(isFunction({})).toBe(false)
		expect(isFunction([])).toBe(false)
		expect(isFunction(null)).toBe(false)
		expect(isFunction(false)).toBe(false)
		expect(isFunction(undefined)).toBe(false)
	})
})

describe('isNaN', () => {
	it('should return true for a NaN input', () => {
		expect(isNaNumber(NaN)).toBe(true)
	})

	it('should return false for a non-NaN input', () => {
		expect(isNaNumber(0)).toBe(false)
		expect(isNaNumber('')).toBe(false)
		expect(isNaNumber({})).toBe(false)
		expect(isNaNumber([])).toBe(false)
		expect(isNaNumber(null)).toBe(false)
		expect(isNaNumber(false)).toBe(false)
		expect(isNaNumber(undefined)).toBe(false)
	})
})

describe('isNull', () => {
	it('should return true for a null input', () => {
		expect(isNull(null)).toBe(true)
	})

	it('should return false for a non-null input', () => {
		expect(isNull(0)).toBe(false)
		expect(isNull('')).toBe(false)
		expect(isNull({})).toBe(false)
		expect(isNull([])).toBe(false)
		expect(isNull(false)).toBe(false)
		expect(isNull(undefined)).toBe(false)
	})
})

describe('isNullOrUndefined', () => {
	it('should return true for a null or undefined input', () => {
		expect(isNullOrUndefined(null)).toBe(true)
		expect(isNullOrUndefined(undefined)).toBe(true)
	})

	it('should return false for a non-null or undefined input', () => {
		expect(isNullOrUndefined(0)).toBe(false)
		expect(isNullOrUndefined('')).toBe(false)
		expect(isNullOrUndefined({})).toBe(false)
		expect(isNullOrUndefined([])).toBe(false)
		expect(isNullOrUndefined(false)).toBe(false)
	})
})

describe('isNumber', () => {
	it('should return true for a number input', () => {
		expect(isNumber(0)).toBe(true)
	})

	it('should return false for a non-number input', () => {
		expect(isNumber('')).toBe(false)
		expect(isNumber({})).toBe(false)
		expect(isNumber([])).toBe(false)
		expect(isNumber(null)).toBe(false)
		expect(isNumber(false)).toBe(false)
		expect(isNumber(undefined)).toBe(false)
	})
})

describe('isObject', () => {
	it('should return true for an object input', () => {
		expect(isObject({})).toBe(true)
	})

	it('should return false for a non-object input', () => {
		expect(isObject(0)).toBe(false)
		expect(isObject('')).toBe(false)
		expect(isObject(null)).toBe(false)
		expect(isObject(false)).toBe(false)
		expect(isObject(undefined)).toBe(false)
	})
})

describe('isRegExp', () => {
	it('should return true for a regexp input', () => {
		expect(isRegExp(/a/)).toBe(true)
	})

	it('should return false for a non-regexp input', () => {
		expect(isRegExp(0)).toBe(false)
		expect(isRegExp('')).toBe(false)
		expect(isRegExp({})).toBe(false)
		expect(isRegExp([])).toBe(false)
		expect(isRegExp(null)).toBe(false)
		expect(isRegExp(false)).toBe(false)
		expect(isRegExp(undefined)).toBe(false)
	})
})

describe('isString', () => {
	it('should return true for a string input', () => {
		expect(isString('')).toBe(true)
	})

	it('should return false for a non-string input', () => {
		expect(isString(0)).toBe(false)
		expect(isString({})).toBe(false)
		expect(isString([])).toBe(false)
		expect(isString(null)).toBe(false)
		expect(isString(false)).toBe(false)
		expect(isString(undefined)).toBe(false)
	})
})

describe('isSymbol', () => {
	it('should return true for a symbol input', () => {
		expect(isSymbol(Symbol())).toBe(true)
	})

	it('should return false for a non-symbol input', () => {
		expect(isSymbol(0)).toBe(false)
		expect(isSymbol('')).toBe(false)
		expect(isSymbol({})).toBe(false)
		expect(isSymbol([])).toBe(false)
		expect(isSymbol(null)).toBe(false)
		expect(isSymbol(false)).toBe(false)
		expect(isSymbol(undefined)).toBe(false)
	})
})

describe('isTruthy', () => {
	it('should return true for a truthy input', () => {
		expect(isTruthy(1)).toBe(true)
		expect(isTruthy('a')).toBe(true)
		expect(isTruthy({})).toBe(true)
		expect(isTruthy([])).toBe(true)
		expect(isTruthy(true)).toBe(true)
	})

	it('should return false for a falsy input', () => {
		expect(isTruthy(0)).toBe(false)
		expect(isTruthy('')).toBe(false)
		expect(isTruthy(null)).toBe(false)
		expect(isTruthy(false)).toBe(false)
		expect(isTruthy(undefined)).toBe(false)
	})
})

describe('isUndefined', () => {
	it('should return true for an undefined input', () => {
		expect(isUndefined(undefined)).toBe(true)
	})

	it('should return false for a non-undefined input', () => {
		expect(isUndefined(0)).toBe(false)
		expect(isUndefined('')).toBe(false)
		expect(isUndefined({})).toBe(false)
		expect(isUndefined([])).toBe(false)
		expect(isUndefined(null)).toBe(false)
		expect(isUndefined(false)).toBe(false)
	})
})

describe('isURLSearchParams', () => {
	it('should return true for a URLSearchParams input', () => {
		expect(isURLSearchParams(new URLSearchParams())).toBe(true)
	})

	it('should return false for a non-URLSearchParams input', () => {
		expect(isURLSearchParams(0)).toBe(false)
		expect(isURLSearchParams('')).toBe(false)
		expect(isURLSearchParams({})).toBe(false)
		expect(isURLSearchParams([])).toBe(false)
		expect(isURLSearchParams(null)).toBe(false)
		expect(isURLSearchParams(false)).toBe(false)
		expect(isURLSearchParams(undefined)).toBe(false)
	})
})
