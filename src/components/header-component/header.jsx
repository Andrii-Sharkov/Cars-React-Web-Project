import React from 'react';
import styled from 'styled-components';
import Navigation from '../navigation-component/navigation';

const HeaderComponent = styled.header`
  color: white;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 15px; 

  @media screen and (max-width: 1199px) {
    margin: 0 20px;
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  letter-spacing: 10px;
  font-family: cursive;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <Logo>LOGO</Logo>
      {/* Burger Menu DO NOT FORGET */}
      <Navigation />
    </HeaderComponent>
  )
}

export default Header;