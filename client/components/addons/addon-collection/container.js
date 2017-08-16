import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import AddonCollectionPage from './addon-collection'

@inject('addon')
@observer
class AddonCollectionPageContainer extends Component {
	static propTypes = {
		addon: PropTypes.object.isRequired
	}

	render () {
		const { addon } = this.props

		return (
			<AddonCollectionPage
				addons={addon.addonsSortedByMostRecent}
			/>
		)
	}
}

export default AddonCollectionPageContainer
