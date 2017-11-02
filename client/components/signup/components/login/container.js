import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import Login from './login'

@inject('matchmaking', 'player')
@observer
class LoginContainer extends Component {
	static propTypes = {
		matchmaking: PropTypes.object.isRequired,
		player: PropTypes.object.isRequired,
		gotoRegister: PropTypes.func.isRequired
	}

	// This implementation is temporary
	login = (handle, password) => {
		// Both of these are expecting usernames, not emails
		this.props.player.setPlayerDetails(handle)
		this.props.matchmaking.addPlayerToLobby(handle)
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
