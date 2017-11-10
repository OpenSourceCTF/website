import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import Chatbox from './chatbox'

@inject('player')
@observer
class ChatboxContainer extends Component {
	static propTypes = {
		player: PropTypes.object.isRequired
	}

	state = {
		messages: []
	}

	componentDidMount () {
		// TEMP
		this.setState({
			messages: [{
				timestamp: Date.now(),
				sender: 'teoretyczny',
				message: 'Hey!'
			}, {
				timestamp: Date.now(),
				sender: 'DwarfFortres',
				message: 'Hi!'
			}, {
				timestamp: Date.now(),
				sender: 'ElectroBall',
				message: 'Yo!'
			}]
		})
	}

	get messagesSortedChronologically () {
		return this.state.messages.sort((a, b) => {
			if (a.timestamp > b.timestamp) return 1
			if (a.timestamp < b.timestamp) return -1

			return 0
		})
	}

	sendMessage = message => {
		// TEMP
		const messages = [...this.state.messages, {
			timestamp: Date.now(),
			sender: this.props.player.username,
			message
		}]

		this.setState({ messages })
	}

	render () {
		return (
			<Chatbox
				messages={this.messagesSortedChronologically}
				sendMessage={this.sendMessage}
			/>
		)
	}
}

export default ChatboxContainer
