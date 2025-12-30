import Image from 'next/image'
import React from 'react'
import cross from '../public/cross-header.svg'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
        <span>Sign up and get 20% off to your first order. <Underline>Sign Up Now</Underline></span>
        <Icon><Image src={cross} alt="cross Image"/></Icon>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  font-family: "Satoshi";
  font-weight: 400;
  width: 100%;
  height: 38px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 14px;
`;

const Underline = styled.span`
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 4px;
`;

const Icon = styled.span`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;