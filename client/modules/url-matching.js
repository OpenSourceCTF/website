const urlIsActive = (exact, path) => {
	const url = window.location.pathname

	if ([url, path].some(str => typeof str !== 'string')) {
		return TypeError(`Received '${typeof str}' as argument, expected 'string'.`)
	}

	return url.substring(0, path.length) === path
}

export const urlIsExactMatch = urlIsActive.bind(this, true)
export const urlStartsWithMatch = urlIsActive.bind(this, false)
