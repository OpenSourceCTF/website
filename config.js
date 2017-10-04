const config = new Map()

config.set('APP_NAME', 'CTF Pro')

// browserlist shared by Webpack/Autoprefixer and Babel
config.set('BROWSER_SUPPORT', [
	'last 2 Chrome versions',
	'last 2 Firefox versions',
	'last 2 Edge versions',
	'last 2 Safari versions'
])

// CJS so that it can be isomorphic
module.exports = config
