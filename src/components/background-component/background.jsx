import React from 'react';
import styled from 'styled-components';
import BackgroundImage3 from '../../images/background-image-3.jpg'

const BackgroundComponent = styled.section`
  height: 100vh;
  background: url(${BackgroundImage3}) no-repeat, center center / cover;
  position: relative;
`;

const BackgroundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  row-gap: 20px;
  width: 250px;
  position: absolute;
  top: 5rem;
  right: 22rem;

  @media screen and (max-width: 499px) {
    top: 3rem;
    left: 7rem;
  }

  @media screen and (max-width: 299px) {
    left: 0;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  text-align: end;
  letter-spacing: 1.5px;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 200px;
  background: #DB545A;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.5s;

  &:hover {
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    letter-spacing: 3px; 
  }
`;

const Background = () => {
  return (
    <BackgroundComponent>
      <BackgroundContent>
        <Title>
          Safe. Relaxing. Good to ride in.
        </Title>
        <Button>Read More</Button>
      </BackgroundContent>
    </BackgroundComponent>
  )
}

export default Background;