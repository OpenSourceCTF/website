import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import browserHistory from 'BrowserHistory'
import { createPlayer } from 'API/auth'
import { init as initStores } from '../../../../stores/'

import Register from './register'

@inject('player')
@observer
class RegisterContainer extends Component {
	static propTypes = {
		player: PropTypes.object.isRequired,
		gotoLogin: PropTypes.func.isRequired
	}

	register = async (username, email, password) => {
		const wasSuccess = await createPlayer(username, email, password)

		if (wasSuccess) {
			initStores()

			browserHistory.push('/')
		}
	}

	render () {
		return (
			<Register
				onSubmit={this.register}
				gotoLogin={this.props.gotoLogin}
			/>
		)
	}
}

export default RegisterContainer
