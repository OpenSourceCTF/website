const sleep = ms => new Promise((resolve, reject) => {
	if (typeof ms !== 'number') {
		return reject(new TypeError(`Received '${typeof ms}' as argument, expected 'number'.`))
	}

	if (ms <= 0) {
		return reject(new Error(`Received negative number ${ms} as argument. The number must be above zero.`))
	}

	setTimeout(resolve, ms)
})

export default sleep
