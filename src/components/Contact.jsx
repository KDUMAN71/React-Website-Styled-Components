import React from "react";
import styled from "styled-components";
import Map from "../Image/map.png";
import Phone from "../Image/phone-call.png";
import Mailbox from "../Image/mailbox.png";

const Container = styled.div`
  height: 80%;
  background-image: url("https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: contain;

  @media only screen and (max-width: 480px) {
    height: 90%;
    background-size: cover;
  }
`;
const Wrapper = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: 90%;
  }
`;
const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: -100px;
  }
`;
const Title = styled.h1`
  justify-content: center;
  margin-top: 140px;

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 200px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 10px;
    padding: 5px;
  }
`;
const Text = styled.textarea`
  width: 200px;
  padding: 10px;
  border-radius: 10px;
`;
const Button = styled.button`
  width: 150px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 18px;
  color: white;
  background-color: crimson;
  cursor: pointer;
  align-items: center;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
    padding: 10px;
  }
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -100px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin-bottom: 20px;
  font-size: 18px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    margin-right: 10px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Form>
            <Title>
              Any Question? <br></br>Get in Touch!
            </Title>
            <Input type="text" placeholder="Your Name"></Input>
            <Input type="email" placeholder="Your Email"></Input>
            <Input type="text" placeholder="Subject"></Input>
            <Text placeholder="Type Your Message Here"></Text>
            <Button>Submit</Button>
          </Form>
        </FormContainer>
        <AddressContainer>
          <Title>CONTACT US</Title>
          <List>
            <ListItem>
              <Icon src={Map} />
              Ziya Gökalp Mah. Mall Of İstanbul
            </ListItem>
            <ListItem>
              <Icon src={Phone} />
              +90 212 982 57 24
            </ListItem>
            <ListItem>
              <Icon src={Mailbox} />
              info@premiumdijital.com
            </ListItem>
          </List>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
