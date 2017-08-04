module.exports = {
	context: `${__dirname}/../`,
	target: 'web',
	resolve: {
		extensions: ['.js', '.json', '.sass']
	},
	output: {
		filename: 'bundle.js'
	}
}
