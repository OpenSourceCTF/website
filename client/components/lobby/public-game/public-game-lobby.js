import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './public-game-lobby.sass'

const PublicGameLobby = ({ self, players, lobbyIsPublic }) => {
	const renderedPlayers = players.map(player => {
		const classes = classNames(styles['player'], {
			[styles['player--highlight']]: player === self
		})

		return (
			<li
				key={player}
				className={classes}
			>
				{player}
			</li>
		)
	})
	return (
		<div>
			<header className={styles['header']}>
				<h2>
					Lobby
					<span className={`c-label c-label--${lobbyIsPublic ? 'active' : 'dormant'}`}>
						{ lobbyIsPublic ? 'Public' : 'Private' }
					</span>
				</h2>
			</header>
			<ul>
				{renderedPlayers}
			</ul>
		</div>
	)
}

PublicGameLobby.propTypes = {
	self: PropTypes.string.isRequired,
	players: PropTypes.arrayOf(PropTypes.string).isRequired,
	lobbyIsPublic: PropTypes.bool.isRequired
}

export default PublicGameLobby
