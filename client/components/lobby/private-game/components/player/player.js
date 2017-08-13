import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { DragSource } from 'react-dnd'

import styles from './player.sass'

const playerSource = {
	beginDrag: props => ({ player: props.player })
}

@DragSource(props => props.team, playerSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
}))
class Player extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		player: PropTypes.string.isRequired,
		team: PropTypes.string.isRequired
	}

	render () {
		const { connectDragSource, isDragging, player } = this.props

		const classes = classNames(styles['player'], {
			[styles['player--dragging']]: isDragging
		})

		return connectDragSource(
			<li className={classes}>
				{player}
			</li>
		)
	}
}

export default Player
