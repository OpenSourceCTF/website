import React from 'react'
import PropTypes from 'prop-types'
import { PropTypes as MobxPropTypes } from 'mobx-react'

import styles from './private-game-lobby.sass'

const renderPlayerInList = player => (
	<li key={player.name} className={styles['player']}>{player.name}</li>
)

const PrivateGameLobby = ({ players, lobbyIsPublic }) => {
	const renderedGroups = players.reduce((grouped, player) => ({
		...grouped,
		[player.group]: [
			...grouped[player.group],
			renderPlayerInList(player)
		]
	}), { team1: [], team2: [], spectators: [] })

	return (
		<div className={styles['wrapper']}>
			<header className={styles['header']}>
				<h2>Lobby ({ lobbyIsPublic ? 'Public' : 'Private' })</h2>
			</header>
			<div className={styles['teams-wrapper']}>
				<div className={`${styles['team']} ${styles['team--1']}`}>
					<header>
						<h3>Red Team</h3>
					</header>
					<ul>
						{renderedGroups.team1}
					</ul>
				</div>
				<div className={`${styles['team']} ${styles['team--2']}`}>
					<header>
						<h3>Blue Team</h3>
					</header>
					<ul>
						{renderedGroups.team2}
					</ul>
				</div>
			</div>
			<div className={`${styles['team']} ${styles['team--spectators']}`}>
				<header>
					<h3>Spectators</h3>
				</header>
				<ul>
					{renderedGroups.spectators}
				</ul>
			</div>
		</div>
	)
}

PrivateGameLobby.propTypes = {
	players: MobxPropTypes.observableArrayOf(PropTypes.object).isRequired,
	lobbyIsPublic: PropTypes.bool.isRequired
}

export default PrivateGameLobby
