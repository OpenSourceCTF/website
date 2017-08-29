import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import PrivateGameLobbyPage from './private-game-lobby'

@inject('matchmaking')
@observer
class PrivateGameLobbyPageContainer extends Component {
	static propTypes = {
		matchmaking: PropTypes.object.isRequired
	}

	render () {
		const { matchmaking } = this.props

		return (
			<PrivateGameLobbyPage
				players={matchmaking.othersInLobby}
				lobbyIsPublic={matchmaking.publicLobby}
			/>
		)
	}
}

export default PrivateGameLobbyPageContainer
