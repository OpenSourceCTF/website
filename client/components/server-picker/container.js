import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import ServerPickerPage from './server-picker'

@inject('matchmaking')
@observer
class ServerPickerPageContainer extends Component {
	static propTypes = {
		matchmaking: PropTypes.object.isRequired
	}

	render () {
		const { matchmaking } = this.props

		return (
			<ServerPickerPage
				servers={matchmaking.serversSortedByPing}
				selectedServer={matchmaking.chosenServer}
				selectServer={matchmaking.setServer}
			/>
		)
	}
}

export default ServerPickerPageContainer
