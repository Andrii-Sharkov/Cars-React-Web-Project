import React from 'react';
import styled from 'styled-components';
import { SiFacebook } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGooglePlusCircle } from 'react-icons/ai';

const ContactFormComponent = styled.section`
  height: 70vh;
  background: white;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1199px) {
    margin: 20px;
    height: 55vh;
  }

  @media screen and (max-width: 699px) {
    height: 80vh;
  }

  @media screen and (max-width: 399px) {
    height: 82vh;
  }

  @media screen and (max-width: 299px) {
    height: 75vh;
  }
`;

const FormContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 20px;

  @media screen and (max-width: 699px) {
    grid-template-columns: 2fr;
  }
`;

const FormLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 15px;

  @media screen and (max-width: 299px) {
    row-gap: 0px;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: black;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 20px;

  @media screen and (max-width: 299px) {
    font-size: 1.5rem;
  }
`;

const Address = styled.p`
  font-size: 1.4rem;
  color: #9CA6A5;
  line-height: 1.3;
  margin-bottom: 30px;
  letter-spacing: 1.4px;
  padding: 0 60px;

  @media screen and (max-width: 299px) {
    padding: 0px;
    font-size: 1.3rem;
    line-height: 1.1;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 15px;
`;

const ContactTitle = styled.h2`
  color: black;
  font-size: 2.5rem;
  letter-spacing: 2px;
  font-weight: 800;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media screen and (max-width: 299px) {
    font-size: 1.7rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  background: #F2F2F2;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 5px 0 5px 10px;
  font-size: 1.2rem;
`;

const TextArea = styled.textarea`
  background: #F2F2F2;
  width: 100%;
  height: 80px;
  padding: 10px 0 0 10px;
  font-size: 1.2rem;
  outline: none;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: #DB545A;
  padding: 5px 10px;
  letter-spacing: 1.5px;
  color: white;
  font-size: 1.3rem;
  margin-top: 20px;
  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 2.5px;
    background: white;
    color: black;
    border: 1px solid black;
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.8);
  }
`;

const ContactForm = () => {
  return (
    <ContactFormComponent>
      <FormContent>
        <FormLocation>
          <Title>Location</Title>
          <Address>
            35 Montgomery Street, Level 20, AUSTRALIA
          </Address>
          <Title>Follow Us</Title>
          <LinksContainer>
            <SiFacebook style={{fontSize: '3rem'}}/>
            <AiFillTwitterCircle style={{fontSize: '3rem'}}/>
            <AiFillInstagram style={{fontSize: '3rem'}}/>
            <AiFillGooglePlusCircle style={{fontSize: '3rem'}}/>
          </LinksContainer>
        </FormLocation>
        <Form>
          <ContactTitle>Contact Form</ContactTitle>
          <Input text='name' placeholder='Your Name'></Input>
          <Input text='email' placeholder='Your Email'></Input>
          <TextArea placeholder='Your Message'></TextArea>
          <Button type='submit'>Submit</Button>
        </Form>
      </FormContent>
    </ContactFormComponent>
  )
}

export default ContactForm;