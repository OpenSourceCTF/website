import sleep from 'Modules/sleep'

describe('Sleep promise', () => {
	test('should return a promise that resolves after ~500ms', () => {
		expect.assertions(1)

		return expect(sleep(500)).resolves.toBeUndefined()
	})

	test('should fail if a non-number type is passed as an argument', async () => {
		expect.assertions(3)

		await expect(sleep('500')).rejects.toEqual(expect.any(TypeError))
		await expect(sleep(true)).rejects.toEqual(expect.any(TypeError))
		await expect(sleep({ a: 500 })).rejects.toEqual(expect.any(TypeError))
	})

	test('should fail if a non-positive number is passed as an argument', async () => {
		expect.assertions(2)

		await expect(sleep(-5)).rejects.toEqual(expect.any(Error))
		await expect(sleep(0)).rejects.toEqual(expect.any(Error))
	})
})
