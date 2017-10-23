import React from 'react'
import PropTypes from 'prop-types'

import styles from './addon-list-item.sass'

const AddonListItem = ({ name, description, author, totalUsers, rating }) => (
	<li
		key={name}
		className={`c-card ${styles['item']}`}
	>
		<span className={styles['addon-title']}>
			<strong>{name}</strong> by {author}
		</span>
		<span className={styles['addon-details']}>
			<em> &mdash; Rating: {100 * rating}% </em> ({totalUsers} users)
		</span>
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
