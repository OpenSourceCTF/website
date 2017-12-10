import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import Signup from './signup'

@inject('player')
@observer
class SignupContainer extends Component {
	static propTypes = {
		player: PropTypes.object.isRequired
	}

	render () {
		const { player } = this.props

		return (
			<Signup
				isLoggedIn={player.isLoggedIn}
			/>
		)
	}
}

export default SignupContainer
