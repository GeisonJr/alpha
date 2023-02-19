import { encrypt, decrypt, TOptions } from '@/crypt'

describe('crypt', () => {
	const message = 'test message'
	const password = 'test password'
	const options: TOptions = {
		salt: 'test salt'
	}

	it('encrypts a message with custom salt', () => {
		const encrypted = encrypt(message, password, options)
		expect(encrypted).not.toBe(message)
	})

	it('decrypts an encrypted message with custom salt', () => {
		const encrypted = encrypt(message, password, options)
		const decrypted = decrypt(encrypted, password, options)
		expect(decrypted).toBe(message)
	})

	it('encrypts a message with random salt', () => {
		const encrypted = encrypt(message, password)
		expect(encrypted).not.toBe(message)
	})

	it('decrypts an encrypted message with random salt', () => {
		const encrypted = encrypt(message, password)
		const decrypted = decrypt(encrypted, password)
		expect(decrypted).toBe(message)
	})
})
