import React from 'react';
import styled from 'styled-components';

const FooterComponent = styled.div`
  background: black;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 699px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 399px) {
    font-size: 1.1rem;
  }
`;

const Footer = () => {
  return (
    <FooterComponent>
      <Text>The website was made with 💝 by Andrew Sharkov for studying purposes in 2021.</Text>
    </FooterComponent>
  )
}

export default Footer;