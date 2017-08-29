import React, { Component } from 'react'
import InitGame from 'ctfpro-web-client'

import styles from './arena.sass'

class Arena extends Component {
	componentDidMount () {
		InitGame(this.gameEl)
	}

	render () {
		return (
			<main
				className={styles['wrapper']}
				ref={el => { this.gameEl = el }}
			/>
		)
	}
}

export default Arena
