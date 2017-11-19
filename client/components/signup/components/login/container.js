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

	login = (handle, password) =>
		login(handle, password)
			.then(res => {
				initStores()

				browserHistory.push('/')

				return res.data
			})
			.catch(err => err.response.data)

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
