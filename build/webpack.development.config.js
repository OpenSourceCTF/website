'use strict'

const merge = require('lodash.merge')
const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const baseConfig = require('./webpack.base.config')
const autoprefixer = require('autoprefixer')

// Set var with fallbacks in case the env file failed to load or the env var is missing
require('dotenv').config({ silent: true })

const webPort = Number(process.env.WEB_SERVER_PORT) || 5000

module.exports = merge(baseConfig, {
	entry: './client/index.js',
	output: {
		path: `${__dirname}/../server/static/dist`,
		publicPath: '/dev-assets/'
	},
	devServer: {
		port: webPort + 1,
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
				test: /\.sass$/,
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
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: () => {
								// Dynamically targeted autoprefixing
								autoprefixer({
									browsers: [
										'last 2 Chrome versions',
										'last 2 Firefox versions',
										'last 2 Edge versions',
										'last 2 Safari versions'
									]
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
