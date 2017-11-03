const cfg = require('./config')

module.exports = {
	presets: [
		['env', {
			// Dynamically targeted feature transpilation
			targets: {
				browsers: cfg.get('BROWSER_SUPPORT')
			},
			// Enable conditional polyfilling babel-polyfill
			useBuiltIns: true,
			// For Webpack tree shaking
			modules: false
		}],
		'react'
	],
	// Jest-specific config
	env: {
		test: {
			presets: [
				['env', {
					// Target the minimum Node version as defined in package.json engines.node key
					targets: {
						node: 8
					}
				}]
			]
		}
	},
	// These are plugins for JS standard proposals that aren't yet fully
	// standardised but are well worth using now anyway. Anything that's already
	// fully standardised is covered by the env preset above
	plugins: [
		// import()
		'syntax-dynamic-import',
		// @decorators (legacy) - must be listed BEFORE class properties
		'transform-decorators-legacy',
		// Static class properties & ES2016 property initialiser syntax - loose to maintain compatibility with legacy decorators
		['transform-class-properties', { 'loose': true }],
		// {...object}
		'transform-object-rest-spread',
		// Export default from
		'transform-export-default'
	]
}
