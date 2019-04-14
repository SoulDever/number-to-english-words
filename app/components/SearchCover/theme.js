import { css } from '@emotion/core';
import styled from '@emotion/styled';

const searchCoverStyles = ({background}) => css`
	background-image: ${background ? `url(${background})` : 'none'};
	background-size: cover;
	background-position: center center;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	margin: 0 0 30px 0;
	
	@media (min-width: 768px){
		padding: 0;
		margin: 0 0 50px 0;
	}
`;

export const SearchCover = styled.div`
	${searchCoverStyles}
`

const searchCoverWrapperStyles = css`
	box-sizing: border-box;
	display: flex;
	flex-flow: column;
	align-items: center;
	margin: 0 auto;
	height: 100%;
	max-width: 830px;
	position: relative;
	padding: 30px 0 0;
	
	> h1 {
		text-align: center;
		margin: 0 0 30px;
		max-width: 80%;
	
		@media (min-width: 579px){
			max-width: 100%;
		}
	}
	
	@media (min-width: 768px){
		padding: 100px 0 80px;
	}
`;

export const SearchCoverWrapper = styled.div`
	${searchCoverWrapperStyles}
`
