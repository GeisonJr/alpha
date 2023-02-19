import { decycle } from '@/json'

describe('decycle', () => {
	it('should replace all cycular references with a string', () => {
		const a: any = {}
		const b: any = {}
		const c: any = {}
		a.a = a
		b.a = a
		b.b = b
		c.a = a
		c.b = b
		c.c = c

		expect(decycle(a)).toEqual('{"a":"[Circular]"}')
		expect(decycle(b)).toEqual('{"a":{"a":"[Circular]"},"b":"[Circular]"}')
		expect(decycle(c)).toEqual('{"a":{"a":"[Circular]"},"b":{"a":"[Circular]","b":"[Circular]"},"c":"[Circular]"}')
	})
})
