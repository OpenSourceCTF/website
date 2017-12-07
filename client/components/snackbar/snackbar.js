import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './snackbar.sass'

class Snackbar extends PureComponent {
	static propTypes = {
		onHide: PropTypes.func.isRequired,
		open: PropTypes.bool.isRequired,
		message: PropTypes.string.isRequired,
		type: PropTypes.oneOf(['info', 'error'])
	}

	static defaultProps = {
		type: 'info',
		timeoutInMs: 3000
	}

	render () {
		const { onHide, open, message, type } = this.props

		const classes = classNames(
			styles['snackbar'],
			styles[`snackbar--${type}`], {
				[styles['snackbar--active']]: open
			}
		)

		return (
			<div className={classes}>
				{message}

				<span
					onClick={onHide}
					className={styles['exit']}
				>
					&times;
				</span>
			</div>
		)
	}
}

export default Snackbar
