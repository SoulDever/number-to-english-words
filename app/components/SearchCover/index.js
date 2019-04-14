import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import SearchBar from '../SearchBar';
import { SearchCover, SearchCoverWrapper } from './theme'

const searchCover = ({ background, title, styles, getTheNameClicked, valueChanged }) => {

	return (
		<SearchCover background={background} style={styles}>
			<SearchCoverWrapper>
				<Title size={'large'} color={'#FFF'}>{ title }</Title>
				<SearchBar valueChanged={valueChanged} getTheNameClicked={getTheNameClicked} />
			</SearchCoverWrapper>
		</SearchCover>
	);
}

searchCover.propTypes = {
	background: PropTypes.string,
	mobileBackground: PropTypes.string,
	title: PropTypes.node,
	styles: PropTypes.object,
	valueChanged: PropTypes.func,
	getTheNameClicked: PropTypes.func,
}

export default searchCover;
