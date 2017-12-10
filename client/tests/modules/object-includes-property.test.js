import objIncludes from 'Modules/object-includes-property'

describe('Object includes property', () => {
	const myObj = {
		key1: '',
		key2: null,
		key3: 0,
		key4: 'Hello!'
	}

	test('should return true if an object contains the given key.', () => {
		Object.keys(myObj).forEach(key => {
			expect(objIncludes(myObj, key)).toBe(true)
		})
	})

	test('should return false if the key doesn\'t exist', () => {
		expect(objIncludes(myObj, 'key0')).toBe(false)
		expect(objIncludes({}, 'key1')).toBe(false)
	})

	test('should return false if passed any incorrect types', () => {
		expect(objIncludes(1, 'x')).toBe(false)
		expect(objIncludes(false, true)).toBe(false)

		expect(objIncludes(myObj, 0)).toBe(false)
		expect(objIncludes(myObj, true)).toBe(false)
		expect(objIncludes(myObj, null)).toBe(false)
	})
})
