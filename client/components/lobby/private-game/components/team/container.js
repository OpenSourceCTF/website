import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import Team from './team'

@inject('matchmaking')
@observer
class TeamContainer extends Component {
	static propTypes = {
		matchmaking: PropTypes.object.isRequired,
		accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
		className: PropTypes.string.isRequired,
		teamName: PropTypes.string.isRequired,
		teamFriendlyName: PropTypes.string.isRequired,
		players: PropTypes.arrayOf(PropTypes.object).isRequired
	}

	render () {
		const { matchmaking } = this.props

		return (
			<Team
				changePlayerLobbyGroup={matchmaking.changePlayerLobbyGroup}
				accepts={this.props.accepts}
				className={this.props.className}
				teamName={this.props.teamName}
				teamFriendlyName={this.props.teamFriendlyName}
				players={this.props.players}
			/>
		)
	}
}

export default TeamContainer
