import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import RecentAddonsPage from './recent'

@inject('addon')
@observer
class RecentAddonsPageContainer extends Component {
	static propTypes = {
		addon: PropTypes.object.isRequired
	}

	render () {
		const { addon } = this.props

		return (
			<RecentAddonsPage
				addons={addon.addons}
			/>
		)
	}
}

export default RecentAddonsPageContainer
