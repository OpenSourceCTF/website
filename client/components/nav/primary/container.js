import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import PrimaryNav from './nav-primary'

@inject('matchmaking')
@observer
class PrimaryNavContainer extends Component {
	static propTypes = {
		matchmaking: PropTypes.object.isRequired,
		items: PropTypes.array,
		minimal: PropTypes.bool
	}

	render () {
		const { matchmaking } = this.props

		return (
			<PrimaryNav
				lobbyIsActive={matchmaking.lobbyIsActive}
				items={this.props.items}
				minimal={this.props.minimal}
			/>
		)
	}
}

export default PrimaryNavContainer
