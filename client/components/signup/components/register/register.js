import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from '../../signup.sass'

class Register extends PureComponent {
	static propTypes = {
		gotoLogin: PropTypes.func.isRequired
	}

	usernameEl = null

	state = {
		username: '',
		email: '',
		password: ''
	}

	componentDidMount () {
		this.usernameEl.focus()
	}

	handleGenericInput = evt => {
		const tgt = evt.target
		const value = tgt[tgt.type === 'checkbox' ? 'checked' : 'value']

		this.setState({ [tgt.name]: value })
	}

	render () {
		return (
			<div>
				<header>
					<h1>Register</h1>
				</header>

				<form>
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
			</div>
		)
	}
}

export default Register
