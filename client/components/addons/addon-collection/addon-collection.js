import React from 'react'
import PropTypes from 'prop-types'

const AddonCollection = ({ addons }) => {
	const renderedAddonElements = addons.map(addon => (
		<li key={addon.name}>
			<strong>{addon.name}</strong> - {addon.author}. Installs: {addon.totalUsers}. Rating: {addon.rating}
		</li>
	))

	return (
		<ul>
			{renderedAddonElements}
		</ul>
	)
}

AddonCollection.propTypes = {
	addons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AddonCollection
