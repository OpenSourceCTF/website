import React from 'react'
import PropTypes from 'prop-types'

import styles from './public-game-lobby.sass'

const PublicGameLobby = ({ players, lobbyIsPublic }) => {
	const renderedPlayers = players.map(player => (
		<li key={player}>{player}</li>
	))

	return (
		<div>
			<header className={styles['header']}>
				<h2>Lobby ({ lobbyIsPublic ? 'Public' : 'Private' })</h2>
			</header>
			<ul className={styles['list']}>
				{renderedPlayers}
			</ul>
		</div>
	)
}

PublicGameLobby.propTypes = {
	players: PropTypes.arrayOf(PropTypes.string).isRequired,
	lobbyIsPublic: PropTypes.bool.isRequired
}

export default PublicGameLobby
