export default function sleepSync(ms: number) {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}
