import React, { Component } from 'react'
import PrimaryNav from 'Components/nav/primary/'
import { renderer, makeFullscreen } from 'ctfpro-web-client'
import styles from './arena.sass'

class Arena extends Component {
	componentDidMount () {
		this.gameEl.appendChild(renderer.view)
	}

	render () {
		return (
			<div>
				<PrimaryNav />
				<main
					className={styles['wrapper']}
					ref={el => { this.gameEl = el }}
				/>
				<div id={styles['fullscreen']}>
					<button onClick={makeFullscreen}>
						Fullscreen
					</button>
				</div>
			</div>
		)
	}
}

export default Arena
