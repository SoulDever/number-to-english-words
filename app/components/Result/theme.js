import styled from '@emotion/styled';
import { css } from '@emotion/core';

const resultWrapperStyles = css`	
	font-family: 'Josefin Slab', sans-serif;
	color: #000000;
	font-size: 22px;
	line-height: 32px;
	font-weight: 400;
	letter-spacing: 3px;
	text-transform: uppercase;
	display: block;
	margin: 30px auto;
	text-align: center;
`;

export const ResultWrapper = styled.div`
	${resultWrapperStyles}
`
