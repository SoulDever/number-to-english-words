import React from 'react';
import PropTypes from 'prop-types';
import { LoaderWrapper } from './theme'

const loader = ({styles}) => {
	return (
		<LoaderWrapper style={styles}>
			<div />
			<div />
		</LoaderWrapper>
	);
};

loader.propTypes = {
	styles: PropTypes.object
}

export default loader;
