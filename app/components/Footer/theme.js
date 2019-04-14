import styled from '@emotion/styled';
import { css } from '@emotion/core';

const footerWrapperStyles = css`
	background-color: #F7F7F7;
`;

export const FooterWrapper = styled.div`
	${footerWrapperStyles}
`

const footerContentStyles = css`
  max-width: 1150px;
  margin: 0 auto;
  min-height: 125px;
  box-sizing: border-box;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
  
  @media (min-width: 768px) {   
	  justify-content: space-between;
	  flex-flow: row;
  }
`;

export const FooterContent = styled.div`
	${footerContentStyles}
`

const footerCreditsStyles = css`
  font-size: 14px;
  color: #939999;
	font-family: 'Josefin Slab', sans-serif;
  display: flex;
  align-items: center;
`;

export const FooterCredits = styled.div`
	${footerCreditsStyles}
	
	& span {
		display: inline-block;
	}
	
	& a {
    text-decoration: underline;
    display: inline-block;
    color: #939999;
	}
`

const footerLogoStyles = css`
	cursor: pointer;
	font-family: 'Josefin Sans', sans-serif;
	font-size: 16px;
	font-weight: 400;
	margin: 0 0 25px 0;
	
	@media(min-width: 768px) {
		margin: 0;
	}
`;

export const FooterLogo = styled.a`
	${footerLogoStyles}
`
