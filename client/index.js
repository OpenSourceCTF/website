/* eslint-disable import/first */

// Per Babel config this will conditionally bundle the required polyfills during
// build
import 'babel-polyfill'

// Webpack entrypoint for styles
import './styles/index'

// Enable HMR
if (module.hot) module.hot.accept()

// Using Webpack's DefinePlugin we can use global constants such as DEVMODE to
// have some code (e.g. logging) stay in our codebase but be stripped out
// during production builds
if (DEVMODE) console.log('Dev mode active')

// Load each encapsulated segment of the app
import example from './interactions/example'
example()
