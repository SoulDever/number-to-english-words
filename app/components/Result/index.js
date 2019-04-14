import React from 'react';
import PropTypes from 'prop-types';
import { ResultWrapper } from './theme';

const result = ({ children, styles }) => (
	<ResultWrapper className={'Label'} style={styles}>{ children }</ResultWrapper>
);

result.propTypes = {
	children: PropTypes.node.isRequired,
	styles: PropTypes.object,
}

export default result;
