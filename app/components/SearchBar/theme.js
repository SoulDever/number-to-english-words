import { css } from '@emotion/core';
import styled from '@emotion/styled';

const searchBarWrapperStyles = css`
	position: relative;
	width: 100%;
	max-width: 667px;
`;

export const SearchBarWrapper = styled.div`
  ${searchBarWrapperStyles}
`

const searchBarContentStyles = css`
	display: flex;
	align-items: center;
	margin: 0 auto;
	height: 40px;
	box-sizing: border-box;
	background-color: #FFF;
	border-radius: 8px;
	width: 100%;
	padding: 0 10px;
	transition: all 250ms;
	border: 1px solid #DDDDDD;
  z-index: 1000;
	
	&.is-open {			
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
  
  > img {
		margin: 0 10px 0 0;
  }
  
  @media (min-width: 768px) {
    height: 60px;
		padding: 0 20px;
		
		&.SearchBarContent--small {
			height: 40px;
			
			> input {
				font-size: 14px;
			}
		}
  }
`;

export const SearchBarContent = styled.div`
  ${searchBarContentStyles}
`

const searchBarInputStyles = css`
	font-family: 'Josefin Sans', sans-serif;
	font-size: 16px;
	color: #000000;
	border: 0;
	width: 100%;
	z-index: 150;
	text-align: center;
  
  @media (min-width: 768px) {
		font-size: 18px;
  }
`;

export const SearchBarInput = styled.input`
  ${searchBarInputStyles}
  
  &:focus {
      outline: 0;
      box-shadow: none;
  }
`

const searchBarButtonStyles = css`
	opacity: 0;
	transition: opacity 250ms ease-out;
	
	&.is-visible {
		opacity: 1;
		transition: opacity 300ms ease-in;
	}
`;

export const SearchBarButton = styled.div`
  ${searchBarButtonStyles}
`
