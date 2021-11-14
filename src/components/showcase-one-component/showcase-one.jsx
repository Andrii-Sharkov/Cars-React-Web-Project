import React from 'react';
import styled from 'styled-components';
import image1 from '../../images/image-1.jpg'

const ShowcaseComponent = styled.section`
  background: white;
  height: 75vh;
  display: flex;

  @media screen and (max-width: 1199px) {
    height: 95vh;
  }

  @media screen and (max-width: 499px) {
    height: 88vh;
  }

  @media screen and (max-width: 399px) {
    height: 80vh;
  }

  @media screen and (max-width: 299px) {
    height: 75vh;
  }
`;

const ShowcaseGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;

  @media screen and (max-width: 1199px) {
    margin: 0 20px;
    grid-template-columns: 2fr;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

const ContentLeft = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background: black;
  position: relative;

  @media screen and (max-width: 825px) {
    width: 100%;
    height: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 699px) {
    width: 75%;
    height: 75%;
    margin: 0 auto;
  }
`;

const ImageOne = styled.img`
  width: 700px;
  height: 400px;
  z-index: 10;
  transform: translate(60px);
  position: absolute;
  top: 3rem;

  @media screen and (max-width: 825px) {
    transform: translate(20px);
    width: 600px;
    height: 350px;
    left: 5rem;
  }

  @media screen and (max-width: 699px) {
    left: 1rem;
    top: 3rem;
    width: 500px;
    height: 300px;
  }

  @media screen and (max-width: 599px) {
    left: -3rem;
    top: 2rem;
  }

  @media screen and (max-width: 499px) {
    width: 430px;
    height: 270px;
  }

  @media screen and (max-width: 399px) {
    width: 350px;
    height: 220px;
    top: 1rem;
  }

  @media screen and (max-width: 299px) {
    width: 280px;
    height: 180px;
  }
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  @media screen and (max-width: 825px) {
    margin: 0 20px;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: #4D4D4D;
  letter-spacing: 2px;
  text-align: left;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
  letter-spacing: 1.5px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
`;

const HorizontalLine = styled.div`
  width: 60px;
  height: 8px;
  background: black;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background: black;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 1.1rem;
  letter-spacing: 1.5px; 
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    color: black;
    background: white;
    letter-spacing: 2px;
    border: 1px solid black;
  }
`;

const ShowCaseOne = () => {
  return (
    <ShowcaseComponent>
      <ShowcaseGrid>
        <ContentLeft>
          <ImageOne src={image1} alt="fast car"></ImageOne>
        </ContentLeft>
        <ContentRight>
          <HorizontalLine></HorizontalLine>
          <Title>
            Best Cars
          </Title>
          <Subtitle>
            Service
          </Subtitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vitae earum! Sequi odit minima.
          </Text>
          <Button>Read More</Button>
        </ContentRight>
      </ShowcaseGrid>
    </ShowcaseComponent>
  )
}

export default ShowCaseOne;

