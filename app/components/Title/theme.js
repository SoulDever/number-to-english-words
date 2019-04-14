import styled from '@emotion/styled';
import { css } from '@emotion/core';

const titleWrapperStyles = ({ color }) => css`	
	font-family: 'Josefin Sans', sans-serif;
	font-size: 16px;
	line-height: 32px;
	margin: 0 0 20px;
	font-weight: 400;
	color: ${color || '#000'};
	
	&.Title--medium {	
		font-size: 22px;
		line-height: 32px;
	}
	
	&.Title--large {	
		font-size: 32px;
		line-height: 56px;
	}
	
	&.Title--xLarge {	
		font-size: 26px;
		line-height: 32px;
		
		@media (min-width: 768px){				
			font-size: 56px;
			line-height: 66px;
		}
	}
`;

export const TitleWrapper = styled.h1`
	${titleWrapperStyles}
`
