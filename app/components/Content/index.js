import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper } from './theme';

const content = ({styles, children}) => <ContentWrapper style={styles}>{ children }</ContentWrapper>;

content.propTypes = {
	styles: PropTypes.object,
	children: PropTypes.node.isRequired,
}

export default content;
