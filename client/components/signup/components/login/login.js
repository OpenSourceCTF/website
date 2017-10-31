import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from '../../signup.sass'

class Login extends PureComponent {
	static propTypes = {
		gotoRegister: PropTypes.func.isRequired
	}

	handleEl = null

	state = {
		handle: '',
		password: ''
	}

	componentDidMount () {
		this.handleEl.focus()
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
					<h1>Login</h1>
				</header>

				<form>
					<input
						type="text"
						name="handle"
						value={this.state.handle}
						onChange={this.handleGenericInput}
						required
						placeholder="Username / email"
						className="c-input"
						ref={el => { this.handleEl = el }}
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
						Login
					</button>
				</form>

				<span
					onClick={this.props.gotoRegister}
					className={styles['ctx-switch']}
				>
					Register - it&apos;s free!
				</span>
			</div>
		)
	}
}

export default Login
