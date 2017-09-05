import { urlIsExactMatch, urlStartsWithMatch } from 'Modules/url-matching'

// Mock URL path outside of browser environment. From:
// https://github.com/facebook/jest/issues/890#issuecomment-209698782
Object.defineProperty(window.location, 'pathname', {
	writable: true,
	value: '/this/is/a/test/'
})
const urlPath = global.window.location.pathname

describe('URL exact matching', () => {
	test('should return true if the browser URL path matches the argument exactly', () => {
		expect(urlIsExactMatch(urlPath)).toBe(true)
	})

	test('should return false if the browser URL path does not match the argument exactly', () => {
		expect(urlIsExactMatch('example')).toBe(false)
		expect(urlIsExactMatch(urlPath.substring(1))).toBe(false)
		expect(urlIsExactMatch(urlPath + 'x')).toBe(false)
	})

	test('should return TypeError if the wrong type is passed as an argument', () => {
		expect(urlIsExactMatch(123)).toEqual(expect.any(TypeError))
		expect(urlIsExactMatch(null)).toEqual(expect.any(TypeError))
	})
})

describe('URL partial (start) matching', () => {
	test('should return true if the start of the browser URL path contains the argument', () => {
		expect(urlStartsWithMatch(urlPath)).toBe(true)
		expect(urlStartsWithMatch(urlPath.substring(0, 5))).toBe(true)
	})

	test('should return false if the start of the browser URL path does not contain the argument', () => {
		expect(urlStartsWithMatch('example')).toBe(false)
		expect(urlStartsWithMatch(urlPath.substring(1, 6))).toBe(false)
	})

	test('should return TypeError if the wrong type is passed as an argument', () => {
		expect(urlStartsWithMatch(123)).toEqual(expect.any(TypeError))
		expect(urlStartsWithMatch(null)).toEqual(expect.any(TypeError))
	})
})
