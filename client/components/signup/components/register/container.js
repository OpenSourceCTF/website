import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { createPlayer } from 'API/auth'

import Register from './register'

@inject('player')
@observer
class RegisterContainer extends Component {
	static propTypes = {
		player: PropTypes.object.isRequired,
		gotoLogin: PropTypes.func.isRequired
	}

	// This implementation is temporary
	register = async (username, email, password) => {
		const wasSuccess = await createPlayer(username, email, password)

		if (wasSuccess) this.props.player.setPlayerDetails(username)
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
