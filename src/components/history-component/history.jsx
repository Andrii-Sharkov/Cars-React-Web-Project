import React from 'react';
import styled from 'styled-components';
import image from '../../images/image-2.jpg';

const HistoryComponent = styled.section`
  background: white;
  display: flex;
  align-items: center;
  height: 90vh;

  @media screen and (max-width: 1399px) {
    height: 100vh;
  }

  @media screen and (max-width: 1199px) {
    margin: 20px;
    height: 100vh;
  }

  @media screen and (max-width: 699px) {
    height: 130vh;
  }

  @media screen and (max-width: 499px) {
    height: 135vh;
  }
`;

const HistoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; 
    align-items: center;
    justify-content: center;
  }
`; 

const ColumnOne = styled.img`
  width: 500px;
  height: 800px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 768px) {
    width: 450px;
    height: 700px;
    margin: 0 auto;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  @media screen and (max-width: 1199px) {
    margin: 20px;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #DB545A;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 30px;

  @media screen and (max-width: 499px) {
    margin-bottom: 0px;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  color: black;

  @media screen and (max-width: 299px) {
    font-size: 1rem;
    padding: 0px 75px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #808080;
  line-height: 1.2;

  @media screen and (max-width: 299px) {
    font-size: 1.1rem;
    padding: 0px 75px;
  }
`;

const History = () => {
  return (
    <HistoryComponent>
      <HistoryContent>
        <ColumnOne src={image}></ColumnOne>
        <ColumnTwo>
          <Title>Our History</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti aspernatur magni eaque sed ullam aut porro magnam velit aperiam labore nam numquam, dolor quam, minima nulla quisquam libero cupiditate praesentium distinctio accusamus modi molestiae illum nisi! Saepe explicabo eius maiores cupiditate eveniet rerum, eligendi corporis quibusdam deserunt quaerat fuga!
          </Text>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos est veniam quo fugit consectetur expedita provident officia debitis veritatis?
          </Subtitle>
        </ColumnTwo>
      </HistoryContent>
    </HistoryComponent>
  )
}

export default History;