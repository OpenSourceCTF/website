/* eslint-disable import/first */

import React from 'react'
import { render } from 'react-dom'
import cfg from '../config'

import Helmet from 'react-helmet'
import Router from './router'
// TODO mobx

// Per Babel config this will conditionally bundle the required polyfills during
// build
import 'babel-polyfill'

// Webpack entrypoint for styles
import './global-styles/'

// Enable HMR
if (module.hot) module.hot.accept()

// Initialise React tree
const App = () => (
	<div>
		<Helmet title={cfg.get('APP_NAME')} />
		<Router />
	</div>
)

// Render React to DOM
render(<App />, document.querySelector('.js-app'))
