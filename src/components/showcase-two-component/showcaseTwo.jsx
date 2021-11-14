import React from 'react';
import styled from 'styled-components';
import image1 from '../../images/audi r8.jpg';
import image4 from '../../images/image-5.jpg'

const ShowcaseTwoComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  height: 120vh;

  @media screen and (max-width: 1199px) {
    margin: 20px;
  }

  @media screen and (max-width: 999px) {
    height: 100vh;
  }

  @media screen and (max-width: 899px) {
    height: 90vh;
  } 

  @media screen and (max-width: 699px) {
    height: 145vh;
  } 

  @media screen and (max-width: 499px) {
    height: 118vh;
  } 

  @media screen and (max-width: 399px) {
    height: 105vh;
  }

  @media screen and (max-width: 299px) {
    height: 90vh;
  }
`;

const ShowCaseTwoContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 6px 10px 14px rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 699px) {
    grid-template-columns: 2fr;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #DB545A;
  padding: 30px;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: white;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: white;
  line-height: 1.3;
`;

const ShowCaseTwoReverse = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 6px 10px 14px rgba(0, 0, 0, 0.8);
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 699px) {
    grid-template-columns: 2fr;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 30px;
`;

const Title2 = styled.h3`
  font-size: 1.8rem;
  color: black;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #DB545A;
  width: 150px;
  height: 50px;
  font-size: 1.1rem;
  color: white;
  padding: 10px 15px;
  letter-spacing: 1.5px;
  border: none;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 2.5px;
    box-shadow: 4px 8px 12px black;
    border: none;
    background: white;
    border: 1px solid black;
    color: black;
  }
`;

const ShowcaseTwo = () => {
  return (
    <ShowcaseTwoComponent>
      <ShowCaseTwoContent>
        <Image src={image1} alt='audi r8'></Image>
        <Column>
          <Title>Our Cars</Title>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut dolore soluta consequuntur aliquam eum maiores. Neque voluptatibus alias ipsam omnis suscipit nostrum unde velit! Ad adipisci assumenda corrupti sunt?</Text>
        </Column>
      </ShowCaseTwoContent>
      <ShowCaseTwoReverse>
          <Column2>
            <Title2>Other Cars</Title2>
            <Button>Read More</Button>
          </Column2>
          <Image src={image4} alt='audi r8'></Image>
        </ShowCaseTwoReverse>
    </ShowcaseTwoComponent>
  )
}

export default ShowcaseTwo;