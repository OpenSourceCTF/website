'use strict'

const merge = require('lodash.merge')
const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const baseConfig = require('./webpack.base.config')
const autoprefixer = require('autoprefixer')
const cfg = require('../config')

// Set var with fallbacks in case the env file failed to load or the env var is missing
require('dotenv').config({ silent: true })

const webPort = Number(process.env.HOST_WEB_PORT)
const devPort = Number(process.env.HOST_DEV_PORT)

if (!webPort || !devPort) {
	throw new Error('Could not parse dev port(s). Your environment variables may be misconfigured.')
}

module.exports = merge(baseConfig, {
	resolve: {
		// Make local development of the web client a ton easier as it won't treat
		// the web client package as a local file but rather as a fully fledged npm
		// module
		symlinks: false
	},
	entry: [
		'react-hot-loader/patch',
		'./client/index.js'
	],
	output: {
		path: `${__dirname}/../server/static/dist`,
		publicPath: '/dev-assets/'
	},
	devServer: {
		port: devPort,
		proxy: {
			'!/dev-assets/**': {
				target: `http://localhost:${String(webPort)}`,
				secure: false
			}
		},
		hot: true
	},
	devtool: 'cheap-module-eval-source-map',
	performance: {
		hints: false
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.NamedModulesPlugin(),
		new CaseSensitivePathsPlugin(),
		new webpack.DefinePlugin({
			DEVMODE: true
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				use: [
					{
						loader: 'eslint-loader',
						options: {
							configFile: './.eslintrc',
							emitError: true,
							emitWarning: true
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(sass|css)$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							// Fixes sourcemaps breaking relative URLs in CSS
							convertToAbsoluteUrls: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: () => {
								// Dynamically targeted autoprefixing
								autoprefixer({
									browsers: cfg.get('BROWSER_SUPPORT')
								})
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							indentedStytax: true
						}
					}
				]
			}
		]
	}
})
