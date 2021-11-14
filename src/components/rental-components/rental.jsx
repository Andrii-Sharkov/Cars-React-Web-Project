import React from 'react';
import styled from 'styled-components';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoCarSportSharp } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';

const RentalComponent = styled.section`
  background: white;
  height: 25vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 699px) {
    height: 35vh;
  }

  @media screen and (max-width: 599px) {
    height: 38vh;
  }

  @media screen and (max-width: 499px) {
    height: 65vh;
  }
`;

const RentalContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-gap: 15px;

  @media screen and (max-width: 699px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 499px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }

  @media screen and (max-width: 299px) {
    align-items: center;
    justify-content: center;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding: 0 15px;
`;

const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding: 0 15px;
`;

const ColumnFour = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding: 0 15px;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: #4D4D4D;
  letter-spacing: 2px;
  text-align: left;
  margin-bottom: 15px; 

  @media screen and (max-width: 299px) {
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
`;

const Location = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const Cars = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const Clients = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
`;


const Rental = () => {
  return (
    <RentalComponent>
      <RentalContent>
        <ColumnOne>
          <Title>Rental Car Services</Title>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione facilis reprehenderit, ipsum velit minima sed?
          </Text>
        </ColumnOne>
        <ColumnTwo>
          <HiOutlineLocationMarker style={{fontSize: '3.5rem'}}/>
          <Location>Location</Location>
        </ColumnTwo>
        <ColumnThree>
          <IoCarSportSharp style={{fontSize: '3.5rem'}}/> 
          <Cars>100+ Cars</Cars>
        </ColumnThree>
        <ColumnFour>
          <IoIosPeople style={{fontSize: '3.5rem'}}/>
          <Clients>Happy Clients</Clients>
        </ColumnFour>
        
      </RentalContent>
    </RentalComponent>
  )
}

export default Rental;