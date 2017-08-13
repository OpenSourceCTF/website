import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, PropTypes as MobxPropTypes } from 'mobx-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Team from './components/team/'

import styles from './private-game-lobby.sass'

@DragDropContext(HTML5Backend)
@observer
class PrivateGameLobby extends Component {
	static propTypes = {
		players: MobxPropTypes.observableArrayOf(PropTypes.object).isRequired,
		lobbyIsPublic: PropTypes.bool.isRequired
	}

	render () {
		const { players, lobbyIsPublic } = this.props

		const groups = players.reduce((grouped, player) => ({
			...grouped,
			[player.group]: [
				...grouped[player.group],
				player
			]
		}), { team1: [], team2: [], spectators: [] })

		return (
			<div className={styles['wrapper']}>
				<header className={styles['header']}>
					<h2>Lobby ({ lobbyIsPublic ? 'Public' : 'Private' })</h2>
				</header>
				<div className={styles['teams-wrapper']}>
					<Team
						className={styles['team--1']}
						teamName="team1"
						teamFriendlyName="Red Team"
						players={groups.team1}
						accepts={Object.keys(groups).filter(group => group !== 'team1')}
					/>
					<Team
						className={styles['team--2']}
						teamName="team2"
						teamFriendlyName="Blue Team"
						players={groups.team2}
						accepts={Object.keys(groups).filter(group => group !== 'team2')}
					/>
				</div>
				<Team
					className={styles['team--spectators']}
					teamName="spectators"
					teamFriendlyName="Spectators"
					players={groups.spectators}
					accepts={Object.keys(groups).filter(group => group !== 'spectators')}
				/>
			</div>
		)
	}
}

export default PrivateGameLobby
