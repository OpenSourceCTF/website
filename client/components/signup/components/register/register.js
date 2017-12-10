import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import sleep from 'Modules/sleep'

import Snackbar from 'Components/snackbar/'

import styles from '../../signup.sass'

class Register extends PureComponent {
	static propTypes = {
		gotoLogin: PropTypes.func.isRequired,
		onSubmit: PropTypes.func.isRequired
	}

	state = {
		username: '',
		email: '',
		password: '',
		showErrMsg: false,
		errMsg: ''
	}

	usernameEl = null
	errorIndex = 0

	componentDidMount () {
		this.usernameEl.focus()
	}

	hideErrMsg = () => {
		this.setState({ showErrMsg: false })
	}

	handleGenericInput = evt => {
		const tgt = evt.target
		const value = tgt[tgt.type === 'checkbox' ? 'checked' : 'value']

		this.setState({ [tgt.name]: value })
	}

	handleSubmit = async evt => {
		evt.preventDefault()

		const { username, email, password } = this.state

		if (!username || !password) return

		const res = await this.props.onSubmit(username, email, password)

		if (!res.success) {
			this.setState({
				showErrMsg: true,
				errMsg: res.message || 'An unknown error occurred.'
			}, () => {
				this.errorIndex++

				const thisIndex = this.errorIndex

				sleep(3000)
					.then(() => {
						if (thisIndex !== this.errorIndex) return

						this.setState({ showErrMsg: false })
					})
			})
		}
	}

	render () {
		return (
			<div>
				<header>
					<h1>Register</h1>
				</header>

				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleGenericInput}
						required
						placeholder="Username"
						className="c-input"
						ref={el => { this.usernameEl = el }}
					/>

					<input
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleGenericInput}
						placeholder="Email (optional)"
						className="c-input"
					/>

					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleGenericInput}
						required
						placeholder="Password"
						className="c-input"
					/>

					<button
						type="submit"
						className="c-btn c-btn--primary"
					>
						Register
					</button>
				</form>

				<span
					onClick={this.props.gotoLogin}
					className={styles['ctx-switch']}
				>
					I&apos;ve already registered!
				</span>

				<Snackbar
					onHide={this.hideErrMsg}
					open={this.state.showErrMsg}
					message={this.state.errMsg}
					type="error"
				/>
			</div>
		)
	}
}

export default Register
