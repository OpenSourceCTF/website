import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import sleep from 'Modules/sleep'

import Snackbar from 'Components/snackbar/'

import styles from '../../signup.sass'

class Login extends PureComponent {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
		gotoRegister: PropTypes.func.isRequired
	}

	state = {
		handle: '',
		password: '',
		showErrMsg: false,
		errMsg: ''
	}

	handleEl = null
	errorIndex = 0

	componentDidMount () {
		this.handleEl.focus()
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

		const { handle, password } = this.state

		const res = await this.props.onSubmit(handle, password)

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
					<h1>Login</h1>
				</header>

				<form onSubmit={this.handleSubmit}>
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
					Register &mdash; it&apos;s free!
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

export default Login
