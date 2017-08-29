const urlIsActive = (exact, path) => {
	const url = window.location.pathname

	if (exact) return path === url
	else return url.substring(0, path.length) === path
}

export const urlIsExactMatch = urlIsActive.bind(this, true)
export const urlStartsWithMatch = urlIsActive.bind(this, false)
