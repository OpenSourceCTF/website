import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import AddonsNav from '../addons-nav'
import AddonItem from 'Components/addons/list-item/'

@inject('addons')
@observer
class RecentAddonsPage extends Component {
	static propTypes = {
		addons: PropTypes.arrayOf(PropTypes.object).isRequired
	}

	render () {
		const renderedAddons = this.props.addons.map(addon => (
			<AddonItem
				key={addon.id}
				name={addon.name}
				description={addon.description}
				author={addon.author}
				totalUsers={addon.totalUsers}
				rating={addon.rating}
			/>
		))

		return (
			<div>
				<AddonsNav />

				<main className="u-width-limiter">
					<h1>Recently updated addons</h1>

					<ul>
						{renderedAddons}
					</ul>
				</main>
			</div>
		)
	}
}

export default RecentAddonsPage
