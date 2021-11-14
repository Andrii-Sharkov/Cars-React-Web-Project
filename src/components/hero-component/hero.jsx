import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../images/img-background-main.jpg'
import Header from '../header-component/header';
import HeroContent from './hero-content-component/hero-content';

const HeroComponent = styled.div`
  background: url(${backgroundImage}) no-repeat, center center / cover;
  height: 95vh;
`;

const Hero = () => {
  return (
    <HeroComponent>
      <Header />
      <HeroContent />
    </HeroComponent>
  )
}

export default Hero;