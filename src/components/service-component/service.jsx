import React from 'react';
import styled from 'styled-components';
import happyClientImg from '../../images/happy-customer2.jpg';
import happyClientImg2 from '../../images/happy-customer.jpg';

const ServiceComponent = styled.section`
  background: black;
  height: 130vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1399px) {
    height: 185vh;
  }

  @media screen and (max-width: 1199px) {
    height: 155vh;
  }

  @media screen and (max-width: 599px) {
    height: 140vh;
  }

  @media screen and (max-width: 499px) {
    height: 128vh;
  }
`;

const ServiceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 15px; 

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`; 

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    align-items: center;
    justify-content: center;
  }
`;

const Square = styled.div`
  background: #DB545A;
  width: 350px;
  height: 350px;
  position: relative;

  @media screen and (max-width: 499px) {
    height: 250px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 399px) {
    width: 300px;
    height: 150px;
    top: 1rem;
  }

  @media screen and (max-width: 299px) {
    width: 270px;
    height: 120px;
    top: 1rem;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 350px;
  position: absolute;
  top: -5rem;
  left: -12rem;

  @media screen and (max-width: 1400px) {
    top: 2rem;
    left: 5rem;
  }

  @media screen and (max-width: 825px) {
    top: 2rem;
    left: -5rem;
  }

  @media screen and (max-width: 499px) {
    width: 430px;
    height: 270px;
    left: -2.5rem;
  }

  @media screen and (max-width: 399px) {
    width: 350px;
    height: 220px;
    top: -5rem;
    left: -1.5rem;
  }

  @media screen and (max-width: 299px) {
    width: 265px;
    height: 165px;
    top: -4rem;
    left: 0.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 399px) {
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
  letter-spacing: 1.5px;
  color: white;
  margin-top: 50px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  color: white;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  background: #DB545A;
  padding: 5px 10px;
  color: white;
  letter-spacing: 1.5px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  transition: all 0.5s ease-in;

  &:hover {
    background: white;
    color: black;
    letter-spacing: 2px;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    justify-content: center;
    align-items: center;
  }
`;

const TitleRight = styled.h3`
  font-size: 1.8rem;
  color: white;
  letter-spacing: 2px;
  text-align: left;
  margin-bottom: 15px;
  padding: 0 50px;
`;

const SubtitleRight = styled.p`
  font-size: 1.5rem;
  color: #DB545A;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
  letter-spacing: 1.5px;
  padding: 0 50px;
`;

const TextRight = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  color: white;
  margin-top: 20px;
  padding: 0 50px;
`;

const Image2 = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 100px;

  @media screen and (max-width: 1400px) {
    margin: 20px;
  }

  @media screen and (max-width: 1199px) {
    margin: 20px;
    width: 80%;
    height: 80%;
  }
`;

const Service = () => {
  return (
    <ServiceComponent>
      <ServiceContent>
        <ColumnLeft>
          <Square>
            <Image src={happyClientImg} alt="happy clients"></Image>
          </Square>
          <ContentWrapper>
            <Title>Search 50,000 + Car Rental Locations Worldwide</Title>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis magni reprehenderit quasi!
            </Text>
            <Button>Find Car Deals</Button>
          </ContentWrapper>
        </ColumnLeft>
        <ColumnRight>
          <TitleRight>Car Rental</TitleRight>
          <SubtitleRight>Service</SubtitleRight>
          <TextRight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro beatae nesciunt maiores vel hic?
          </TextRight>
          <Image2 src={happyClientImg2}></Image2>
        </ColumnRight>
      </ServiceContent>
    </ServiceComponent>
  )
}

export default Service;