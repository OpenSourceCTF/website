import React from 'react'
import PropTypes from 'prop-types'

import styles from './modal.sass'

const Modal = ({ children, open }) => open ? (
	<div className={styles['wrapper']}>
		<div className={styles['modal']}>
			{children}
		</div>
	</div>
) : null

Modal.propTypes = {
	open: PropTypes.bool.isRequired,
	children: PropTypes.element
}

export default Modal
