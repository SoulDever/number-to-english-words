import React from 'react';
import PropTypes from 'prop-types';
import { TitleWrapper } from './theme'

const title = ({ children, size, color, styles }) => {
	return (
		<TitleWrapper color={color} style={styles} className={['Title', size ? `Title--${size}` : ''].join(' ')}>{ children }</TitleWrapper>
	)
}

title.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.string,
	color: PropTypes.string,
	styles: PropTypes.object,
}

export default title;
