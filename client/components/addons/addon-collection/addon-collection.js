import React from 'react'
import PropTypes from 'prop-types'

const AddonCollection = ({ addons }) => {
	const renderedAddonElements = addons.map(addon => (
		<div id={addon.name} key={addon.name}>
			<strong>{addon.name}</strong> - {addon.author}. Installs: {addon.totalUsers}. Rating: {addon.rating}
		</div>
	))

	return (
		<div>
			{renderedAddonElements}
		</div>
	)
}

AddonCollection.propTypes = {
	addons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AddonCollection
