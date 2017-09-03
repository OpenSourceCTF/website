import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import RecentAddonsPage from './recent'

@inject('addons')
@observer
class RecentAddonsPageContainer extends Component {
	static propTypes = {
		addons: PropTypes.object.isRequired
	}

	render () {
		const { addons } = this.props

		return (
			<RecentAddonsPage
				addons={addons.addonsSortedByMostRecent}
			/>
		)
	}
}

export default RecentAddonsPageContainer
