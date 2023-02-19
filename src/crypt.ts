/* Dependencies */
import * as crypto from 'crypto'

/* Constants */
const ALGORITHM = 'aes-256-gcm'
const KEYLEN = 32

/* Types */
export interface TOptions extends crypto.ScryptOptions {
	salt?: string
}

export function encrypt(message: string, password: string | NodeJS.ArrayBufferView, options?: TOptions): string {
	const salt = options?.salt ? Buffer.from(options.salt, 'hex') : crypto.randomBytes(16)
	const key = crypto.scryptSync(password, salt, KEYLEN)
	const iv = crypto.randomBytes(12)
	const cipher = crypto.createCipheriv(ALGORITHM, key, iv)
	let encrypted = cipher.update(message, 'utf8', 'hex')
	encrypted += cipher.final('hex')
	const authTag = cipher.getAuthTag()
	return `${salt.toString('hex')}:${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`
}

export function decrypt(encrypted: string, password: string, options?: TOptions): string {
	const [saltHex, ivHex, authTagHex, encryptedMessage] = encrypted.split(':')
	const salt = options?.salt ? Buffer.from(options.salt, 'hex') : Buffer.from(saltHex, 'hex')
	const key = crypto.scryptSync(password, salt, KEYLEN, options)
	const iv = Buffer.from(ivHex, 'hex')
	const authTag = Buffer.from(authTagHex, 'hex')
	const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
	decipher.setAuthTag(authTag)
	let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8')
	decrypted += decipher.final('utf8')
	return decrypted
}
