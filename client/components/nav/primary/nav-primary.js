import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { urlStartsWithMatch } from '../../../modules/url-matching'

import { Link } from 'react-router-dom'

import styles from './nav-primary.sass'

const Nav = ({ lobbyIsActive, items, minimal = false }) => {
	const defaultNavItems = [{
		text: lobbyIsActive && !urlStartsWithMatch('/play') ? 'Play ( ! )' : 'Play',
		link: '/play'
	}, {
		text: 'Leaderboards',
		link: '/leaderboards'
	}, {
		text: 'Maps',
		link: '/maps'
	}, {
		text: 'Addons',
		link: '/addons'
	}, {
		text: 'Profile',
		link: '/profile'
	}]

	const navItemsToUse = items && items.length ? items : defaultNavItems

	const renderedNavItems = minimal ? null : navItemsToUse.map(item => {
		const itemClasses = classNames({ [styles['item--active']]: urlStartsWithMatch(item.link) })

		return (
			<Link key={item.text} to={item.link}>
				<li className={itemClasses}>{item.text}</li>
			</Link>
		)
	})

	const renderedUserArea = minimal ? null : (
		<div>LOGIN/etc</div>
	)

	return (
		<nav className={styles['nav']}>
			<Link to="/" className={styles['nav__logo-wrapper']}>
				<img
					src="/static/img/logo.png"
					className={styles['nav__logo']}
				/>
			</Link>

			<ul className={styles['nav__items']}>
				{renderedNavItems}

			</ul>
			{renderedUserArea}
		</nav>
	)
}

Nav.propTypes = {
	lobbyIsActive: PropTypes.bool.isRequired,
	items: PropTypes.array,
	minimal: PropTypes.bool
}

export default Nav
