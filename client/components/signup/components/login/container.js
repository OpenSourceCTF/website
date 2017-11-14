import React, { Component } from 'react'
import PropTypes from 'prop-types'
import browserHistory from 'BrowserHistory'
import { login } from 'API/auth'
import { init as initStores } from '../../../../stores/'

import Login from './login'

class LoginContainer extends Component {
	static propTypes = {
		gotoRegister: PropTypes.func.isRequired
	}

	login = async (handle, password) => {
		const wasSuccess = await login(handle, password)

		if (wasSuccess) {
			initStores()

			browserHistory.push('/')
		}
	}

	render () {
		return (
			<Login
				onSubmit={this.login}
				gotoRegister={this.props.gotoRegister}
			/>
		)
	}
}

export default LoginContainer
