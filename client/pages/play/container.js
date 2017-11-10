import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import PlayPage from './play'

@inject('matchmaking')
@observer
class PlayPageContainer extends Component {
	static propTypes = {
		matchmaking: PropTypes.object.isRequired
	}

	render () {
		const { matchmaking } = this.props

		return (
			<PlayPage
				servers={matchmaking.servers}
				selectedServer={matchmaking.chosenServer}
				selectServer={matchmaking.setServer}
				gameIsPrivate={!matchmaking.publicGame}
				setGamePublic={matchmaking.setGamePublic}
				setGamePrivate={matchmaking.setGamePrivate}
				lobbyIsPublic={matchmaking.publicLobby}
				setLobbyPublic={matchmaking.setLobbyPublic}
				setLobbyPrivate={matchmaking.setLobbyPrivate}
				lobbyIsActive={matchmaking.lobbyIsActive}
			/>
		)
	}
}

export default PlayPageContainer
