import { css } from '@emotion/core'
import styled from '@emotion/styled'

const headerWrapperStyles = css`
	background-color: #F7F7F7;
	height: 60px;
	box-sizing: border-box;
	padding: 0 20px;
	display: flex;
	align-items: center;
	
	@media(min-width: 768px) {
		padding: 0 50px;
	}
`;

export const HeaderWrapper = styled.div`
  ${headerWrapperStyles}
  
  > img {
		margin: 0 20px 0 0;
		cursor: pointer;
  }
`

const headerContentStyles = css`
	margin: 0 auto;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	
	@media(min-width: 768px) {
		justify-content: space-between;
	}
`;

export const HeaderContent = styled.div`
	${headerContentStyles}
`

const headerLogoStyles = css`
	cursor: pointer;
	font-family: 'Josefin Sans', sans-serif;
	font-size: 22px;
	font-weight: 400;
`;

export const HeaderLogo = styled.a`
	${headerLogoStyles}
`
