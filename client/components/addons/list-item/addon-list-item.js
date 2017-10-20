import React from 'react'
import PropTypes from 'prop-types'

import styles from './addon-list-item.sass'

const AddonListItem = ({ name, description, author, totalUsers, rating }) => (
	<li
		key={name}
		className={`c-card ${styles['item']}`}
	>
		<strong>{name}</strong> by {author}. Installs: {totalUsers}. Rating: {rating}.
		<p>{description}</p>
	</li>
)

AddonListItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	totalUsers: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired
}

export default AddonListItem
