import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { DropTarget } from 'react-dnd'

import Player from '../player/'

import styles from './team.sass'

const teamTarget = {
	drop (props, monitor) {
		props.changePlayerLobbyGroup(monitor.getItem().player, props.teamName)
	}
}

@DropTarget(props => props.accepts, teamTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))
class Team extends Component {
	static propTypes = {
		connectDropTarget: PropTypes.func.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired,
		accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
		changePlayerLobbyGroup: PropTypes.func.isRequired,
		className: PropTypes.string.isRequired,
		teamName: PropTypes.string.isRequired,
		teamFriendlyName: PropTypes.string.isRequired,
		players: PropTypes.arrayOf(PropTypes.object).isRequired
	}

	render () {
		const { isOver, canDrop, connectDropTarget, className, teamName, teamFriendlyName, players } = this.props
		const isActive = isOver && canDrop

		const classes = classNames(styles['team'], className, { [styles['team--active']]: isActive })

		const renderedPlayers = players.map(player => (
			<Player
				key={player.name}
				player={player.name}
				team={teamName}
			/>
		))

		return connectDropTarget(
			<div className={classes}>
				<header>
					<h3>{teamFriendlyName}</h3>
				</header>
				<ul>
					{renderedPlayers}
				</ul>
			</div>
		)
	}
}

export default Team
