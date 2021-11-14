import React from 'react';
import styled from 'styled-components';
import image1 from '../../images/airplanes.jpg';
import image4 from '../../images/rolls royce.jpg';
import image5 from '../../images/sport car.jpg';
import image6 from '../../images/yacht.jpg';
import image7 from '../../images/trucks.jpg';

const OtherServicesComponent = styled.section`
  background: white;
  height: 40vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 1199px) {
    margin: 20px;
  }

  @media screen and (max-width: 899px) {
    height: 55vh;
  }

  @media screen and (max-width: 799px) {
    height: 75vh;
  }

  @media screen and (max-width: 699px) {
    height: 210vh;
  }

  @media screen and (max-width: 499px) {
    height: 215vh;
  }

  @media screen and (max-width: 399px) {
    height: 180vh;
  }

  @media screen and (max-width: 299px) {
    height: 160vh;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #DB545A;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 30px;

  @media screen and (max-width: 299px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const OtherServicesContent = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;

  @media screen and (max-width: 899px) {
    flex-wrap: wrap;
    row-gap: 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
  }

  @media screen and (max-width: 399px) {
    row-gap: 0px;
  }
`;

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 899px) {
    width: 250px;
    height: 150px;
  }

  @media screen and (max-width: 699px) {
    width: 500px;
    height: 300px;
  }

  @media screen and (max-width: 499px) {
    width: 430px;
    height: 270px;
    margin: 20px;
  }

  @media screen and (max-width: 399px) {
    width: 350px;
    height: 220px;
  }

  @media screen and (max-width: 299px) {
    width: 260px;
    height: 185px;
  }
`;

const Text = styled.p`
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
`;

const OtherServices = () => {
  return (
    <OtherServicesComponent>
      <Title>
        Other Our Services
      </Title>
      <OtherServicesContent>
      <ColumnOne>
        <Image src={image1}></Image>
        <Text>Airplanes</Text>
      </ColumnOne>
      <ColumnOne>
        <Image src={image6}></Image>
        <Text>Luxury Yachts</Text>
      </ColumnOne>
      <ColumnOne>
        <Image src={image7}></Image>
        <Text>Trucks</Text>
      </ColumnOne>
      <ColumnOne>
        <Image src={image4}></Image>
        <Text>Luxury Cars</Text>
      </ColumnOne>
      <ColumnOne>
        <Image src={image5}></Image>
        <Text>Sport Cars</Text>
      </ColumnOne>
      </OtherServicesContent>
    </OtherServicesComponent>
  )
}

export default OtherServices;