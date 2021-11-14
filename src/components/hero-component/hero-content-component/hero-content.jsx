import React from 'react';
import styled from 'styled-components';

const HeroContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TitleSmall = styled.p`
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 400px;
  width: 300px;

  @media screen and (max-width: 599px) {
    top: 9rem;
    left: 6rem;
  }

  @media screen and (max-width: 299px) {
    left: 4rem;
  }

  @media screen and (max-width: 299px) {
    width: 200px;
  }
`;

const TitleBig = styled.h1`
  font-size: 2rem;
  color: white;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 10px;

  @media screen and (max-width: 299px) {
    font-size: 1.3rem;
  }
`;

const HeroContent = () => {
  return (
    <HeroContentComponent>
      <TitleWrapper>
        <TitleSmall>Car service</TitleSmall>
        <TitleBig>Travel in Luxury and Style</TitleBig>
      </TitleWrapper>
    </HeroContentComponent>
  )
}

export default HeroContent;