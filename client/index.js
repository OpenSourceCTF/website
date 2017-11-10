/* eslint-disable import/first */

import React from 'react'
import { render } from 'react-dom'
import { useStrict } from 'mobx'
import cfg from '../config'
import stores from './stores/'

import Helmet from 'react-helmet'
import Signup from './components/signup/'
import { Provider } from 'mobx-react'
import Router from './router'

// Per Babel config this will conditionally bundle the required polyfills during
// build
import 'babel-polyfill'

// Webpack entrypoint for styles
import './global-styles/'

// Enable HMR
if (module.hot) module.hot.accept()

// Enable mobx strict mode
useStrict(true)

// For easier debugging of mobx
if (DEVMODE) window._MOBX_ = stores

// Initialise React tree
const App = () => (
	<div>
		<Helmet title={cfg.get('APP_NAME')} />

		<Provider {...stores} >
			<div>
				<Signup />

				<Router />
			</div>
		</Provider>
	</div>
)

// Render React to DOM
render(<App />, document.querySelector('.js-app'))
