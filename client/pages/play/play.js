import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PropTypes as MobxPropTypes } from 'mobx-react'

import PrimaryNav from '../../components/nav-primary/'

class PlayPage extends Component {
	static propTypes = {
		servers: MobxPropTypes.observableArrayOf(MobxPropTypes.observableObject).isRequired,
		selectedServer: PropTypes.string.isRequired,
		selectServer: PropTypes.func.isRequired,
		competitive: PropTypes.bool.isRequired,
		setCompetitive: PropTypes.func.isRequired
	}

	handleChangeSelectedServer = evt => this.props.selectServer(evt.target.value)
	handleToggleCompetitive = evt => this.props.setCompetitive(evt.target.checked)

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

				<main className="u-width-limiter">
					<h1>play</h1>

					<label htmlFor="server">Choose server: </label>
					<select
						value={this.props.selectedServer}
						onChange={this.handleChangeSelectedServer}
						name="server"
					>
						{renderedServerOpts}
					</select>

					<br />

					<label htmlFor="competitive">Competitive?: </label>
					<input
						type="checkbox"
						checked={this.props.competitive}
						onChange={this.handleToggleCompetitive}
						name="competitive"
					/>
				</main>
			</div>
		)
	}
}

export default PlayPage
