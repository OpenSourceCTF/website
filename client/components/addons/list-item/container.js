import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import AddonListItem from './addon-list-item'

@observer
class AddonListItemContainer extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		totalUsers: PropTypes.number.isRequired,
		rating: PropTypes.number.isRequired
	}

	render () {
		return (
			<AddonListItem
				{...this.props}
			/>
		)
	}
}

export default AddonListItemContainer
