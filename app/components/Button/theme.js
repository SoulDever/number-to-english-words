import { css } from '@emotion/core';
import styled from '@emotion/styled';

const buttonStyles = css`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #FFEA30;
	font-family: 'Josefin Sans', sans-serif;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  line-heigth: 16px;
  letter-spacing: 2px;
  font-weight: 400;
  height: 40px;
  box-sizing: border-box;
  border: 0;
  border-radius: 6px;
  padding: 3px 20px 0;
  transition: opacity 250ms ease-in-out; 
  margin: 30px auto;
  
  &.Button--light {
    background-color: #FFF;
    border: 1px solid #A8A8A8;
    color: #A8A8A8;
  }
  
  &.Button--medium {
    font-weight: 500;
    height: 32px;
    padding: 0 12px;
    font-size: 14px;
  }
  
  &.Button--outline {
    background-color: transparent;
    border: 2px solid #FFEA30;
    color: #FFEA30;
  }
`;

export const Button = styled.button`
	${buttonStyles}
	
	&:hover {
	  opacity: 0.75;
    cursor: pointer;
	}
	
	&:focus {
    outline: 0;
    box-shadow: none;
	}
`
