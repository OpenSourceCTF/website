import React from 'react'
import PropTypes from 'prop-types'
import { PropTypes as MobxPropTypes } from 'mobx-react'

import styles from './private-game-lobby.sass'

const PrivateGameLobby = ({ players, lobbyIsPublic }) => {
	const renderedPlayers = players.map(player => (
		<li key={player.name}>{player.name} - {player.group}</li>
	))

	return (
		<div>
			<header>
				<h2>Lobby ({ lobbyIsPublic ? 'Public' : 'Private' })</h2>
			</header>
			<ul className={styles['list']}>
				{renderedPlayers}
			</ul>
		</div>
	)
}

PrivateGameLobby.propTypes = {
	players: MobxPropTypes.observableArrayOf(PropTypes.object).isRequired,
	lobbyIsPublic: PropTypes.bool.isRequired
}

export default PrivateGameLobby
