import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PropTypes as MobxPropTypes } from 'mobx-react'

import Chatbox from '../../components/chatbox/'
import PrimaryNav from '../../components/nav/primary/'
import PrivateGameLobby from '../../components/lobby/private-game/'
import PublicLGameobby from '../../components/lobby/public-game/'
import { SecondaryNav, SecondaryNavItem } from '../../components/nav/secondary/'
import ServerPicker from '../../components/server-picker/'

import styles from './play.sass'

class PlayPage extends Component {
	static propTypes = {
		servers: MobxPropTypes.observableArrayOf(MobxPropTypes.observableObject).isRequired,
		selectedServer: PropTypes.string.isRequired,
		selectServer: PropTypes.func.isRequired,
		gameIsPrivate: PropTypes.bool.isRequired,
		setGamePublic: PropTypes.func.isRequired,
		setGamePrivate: PropTypes.func.isRequired,
		lobbyIsPublic: PropTypes.bool.isRequired,
		setLobbyPublic: PropTypes.func.isRequired,
		setLobbyPrivate: PropTypes.func.isRequired,
		lobbyIsActive: PropTypes.bool.isRequired
	}

	state = {
		lobbyWasEverActive: false
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.lobbyIsActive) this.setState({ lobbyWasEverActive: true })
	}

	handleGenericInput = evt => {
		const tgt = evt.target
		const value = tgt[tgt.type === 'checkbox' ? 'checked' : 'value']

		this.setState({ [tgt.name]: value })
	}

	handleLobbyPublicity = evt => {
		const makePublic = evt.target.checked

		makePublic ? this.props.setLobbyPublic() : this.props.setLobbyPrivate()
	}

	render () {
		const renderedChatbox = this.state.lobbyWasEverActive ? <Chatbox /> : null

		const Lobby = this.props.gameIsPrivate ? PrivateGameLobby : PublicLGameobby

		return (
			<div className="u-page">
				<div>
					<PrimaryNav />

					<SecondaryNav>
						<SecondaryNavItem
							onClick={this.props.setGamePublic}
							isActive={!this.props.gameIsPrivate}
						>
							Public
						</SecondaryNavItem>
						<SecondaryNavItem
							onClick={this.props.setGamePrivate}
							isActive={this.props.gameIsPrivate}
						>
							Private
						</SecondaryNavItem>
					</SecondaryNav>
				</div>

				<main className="u-width-limiter">
					<div className={styles['wrapper']}>
						<div className="u-page">
							<div>
								<button
									type="button"
									className="c-btn c-btn--primary"
								>
									{this.props.gameIsPrivate ? 'Start Private Game' : 'Search for Public Game' }
								</button>
							</div>

							{renderedChatbox}

							<Lobby />
						</div>

						<aside className={styles['options']}>
							<header>
								<h1>Options</h1>
							</header>

							<label htmlFor="public-lobby">Public lobby?:</label>
							<input
								type="checkbox"
								id="public-lobby"
								value={this.props.lobbyIsPublic}
								onChange={this.handleLobbyPublicity}
							/>

							<ServerPicker />
						</aside>
					</div>
				</main>
			</div>
		)
	}
}

export default PlayPage
