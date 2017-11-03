import React, { Component } from 'react'
import PrimaryNav from 'Components/nav/primary/'
import { renderer, makeFullscreen } from 'osctf-web-client'

import styles from './arena.sass'

class Arena extends Component {
	componentDidMount () {
		this.gameEl.appendChild(renderer.view)
	}

	render () {
		return (
			<div className={styles['wrapper']}>
				<PrimaryNav />
				<main className={styles['game']}>
					<div>
						<div ref={el => { this.gameEl = el }} />
						<button
							onClick={makeFullscreen}
							className={styles['fullscreen']}
						>
							Fullscreen
						</button>
					</div>
				</main>
			</div>
		)
	}
}

export default Arena
