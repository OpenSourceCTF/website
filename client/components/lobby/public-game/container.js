import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import PublicGameLobbyPage from './public-game-lobby'

@inject('matchmaking')
@observer
class PublicGameLobbyPageContainer extends Component {
	static propTypes = {
		matchmaking: PropTypes.object.isRequired
	}

	render () {
		const { matchmaking } = this.props

		return (
			<PublicGameLobbyPage
				players={matchmaking.othersInLobby.map(player => player.name)}
				lobbyIsPublic={matchmaking.publicLobby}
			/>
		)
	}
}

export default PublicGameLobbyPageContainer
