import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './nav-secondary.sass'

export const SecondaryNav = ({ children }) => (
	<nav>
		<ul className={styles['nav']}>
			{children}
		</ul>
	</nav>
)

SecondaryNav.propTypes = {
	children: PropTypes.node.isRequired
}

export const SecondaryNavItem = ({ children, isActive, onClick, className }) => {
	const classes = classNames(
		className,
		styles['item'],
		{ [styles['item--active']]: isActive }
	)

	return (
		<li
			onClick={onClick}
			className={classes}
		>
			{children}
		</li>
	)
}

SecondaryNavItem.propTypes = {
	children: PropTypes.node.isRequired,
	isActive: PropTypes.bool,
	onClick: PropTypes.func,
	className: PropTypes.string
}
