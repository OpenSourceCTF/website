import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './chatbox.sass'

class Chatbox extends Component {
	state = {
		formMessage: ''
	}

	componentDidUpdate (prevProps) {
		if (prevProps.messages.length !== this.props.messages.length) {
			this.scrollMessagesToBottom()
		}
	}

	scrollMessagesToBottom = () => {
		const messageHeight = this.messagesEl.scrollHeight

		this.messagesEl.scrollTop = messageHeight
	}

	handleFormMessage = evt => {
		const formMessage = evt.target.value

		this.setState({ formMessage })
	}

	handleSubmit = evt => {
		evt.preventDefault()

		const msg = this.state.formMessage

		if (!msg) return

		this.props.sendMessage(msg)
		this.setState({ formMessage: '' })
	}

	render () {
		const renderedMessages = this.props.messages.map(msg => {
			const renderedContents = msg.sender ? (
				<span>
					<strong>{msg.sender}:</strong> {msg.message}
				</span>
			) : <span>{msg.message}</span>

			return (
				<li
					key={msg.timestamp + msg.sender}
					title={new Date(msg.timestamp)}
				>
					{renderedContents}
				</li>
			)
		})

		const sendClasses = classNames(styles['send'], {
			[styles['send--active']]: !!this.state.formMessage
		})

		return (
			<div className={styles['wrapper']}>
				<ul
					className={styles['messages']}
					ref={el => { this.messagesEl = el }}
				>
					{renderedMessages}
				</ul>
				<form
					className={styles['form']}
					onSubmit={this.handleSubmit}
				>
					<input
						className={styles['input']}
						type="text"
						value={this.state.formMessage}
						onChange={this.handleFormMessage}
					/>
					<button
						className={sendClasses}
						type="submit"
					/>
				</form>
			</div>
		)
	}
}

Chatbox.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.object).isRequired,
	sendMessage: PropTypes.func.isRequired
}

export default Chatbox
