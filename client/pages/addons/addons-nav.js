import React from 'react'
import classNames from 'classnames'
import { urlStartsWithMatch } from 'Modules/url-matching'

import { Link } from 'react-router-dom'
import PrimaryNav from 'Components/nav/primary/'
import { SecondaryNav, SecondaryNavItem } from 'Components/nav/secondary/'

import secondaryNavStyles from 'Components/nav/secondary/nav-secondary.sass'

const navItems = [{
	text: 'Installed',
	link: '/addons/installed'
}, {
	text: 'Featured',
	link: '/addons/featured'
}, {
	text: 'Recent',
	link: '/addons/recent'
}, {
	text: 'Search',
	link: '/addons/search'
}, {
	text: 'Manage',
	link: '/addons/manage'
}]

const AddonsNav = () => {
	const renderedItems = navItems.map(item => {
		const itemClasses = classNames({ [secondaryNavStyles['item--active']]: urlStartsWithMatch(item.link) })

		return (
			<Link key={item.text} to={item.link}>
				<SecondaryNavItem className={itemClasses}>
					{item.text}
				</SecondaryNavItem>
			</Link>
		)
	})

	return (
		<div>
			<PrimaryNav />
			<SecondaryNav>
				{renderedItems}
			</SecondaryNav>
		</div>
	)
}

export default AddonsNav
