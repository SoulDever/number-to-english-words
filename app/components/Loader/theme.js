import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

const rotation = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`

const loaderWrapperStyles = css`
  position: relative;
  width: 64px;
  height: 64px;
  margin: 30px auto 0;
  
  div:first-of-type {
    position: absolute;
    border: 4px solid #232323;
    opacity: 1;
    border-radius: 50%;
    animation: ${rotation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  
  div:last-child {
    animation-delay: -0.5s;
  }
`;

export const LoaderWrapper = styled.div`
	${loaderWrapperStyles}
`
