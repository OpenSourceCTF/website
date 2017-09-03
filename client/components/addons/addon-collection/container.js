import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import AddonCollectionPage from './addon-collection'

@observer
class AddonCollectionPageContainer extends Component {
	static propTypes = {
		addons: PropTypes.array.isRequired
	}

	render () {
		const { addons } = this.props

		return (
			<AddonCollectionPage
				addons={addons}
			/>
		)
	}
}

export default AddonCollectionPageContainer
