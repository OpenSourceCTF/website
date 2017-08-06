import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PrimaryNav from '../../components/nav-primary/'

class PlayPage extends Component {
	static propTypes = {
		servers: PropTypes.array.isRequired
	}

	state = {
		formSelectedServer: ''
	}

	handleChangeSelectedServer = evt => {
		const formSelectedServer = evt.target.value

		this.setState({ formSelectedServer })
	}

	render () {
		const serversSortedByPing = this.props.servers.sort((a, b) => {
			if (a.ping > b.ping) return 1
			else if (a.ping < b.ping) return -1

			return 0
		})
		const renderedServerOpts = serversSortedByPing.map(server => (
			<option
				key={server.name}
				value={server.name}
			>
				{server.name} ({server.location}) (~{server.ping}ms)
			</option>
		))

		return (
			<div>
				<PrimaryNav />

				<h1>play</h1>

				<label htmlFor="server">Choose server:&nbsp;</label>
				<select
					value={this.state.formSelectedServer}
					onChange={this.handleChangeSelectedServer}
					name="server"
				>
					{renderedServerOpts}
				</select>
			</div>
		)
	}
}

export default PlayPage
