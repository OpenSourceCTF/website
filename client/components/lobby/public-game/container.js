import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import PublicGameLobbyPage from './public-game-lobby'

@inject('matchmaking', 'player')
@observer
class PublicGameLobbyPageContainer extends Component {
	static propTypes = {
		matchmaking: PropTypes.object.isRequired,
		player: PropTypes.object.isRequired
	}

	render () {
		const { matchmaking, player } = this.props

		return (
			<PublicGameLobbyPage
				self={player.username}
				players={matchmaking.playersInLobby.map(player => player.name)}
				lobbyIsPublic={matchmaking.publicLobby}
			/>
		)
	}
}

export default PublicGameLobbyPageContainer
