import React from "react";
import styled from "styled-components";
import Hacivat from "../Image/hacivat.png";

const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Right = styled.div`
  width: 40%;
`;
const Title = styled.h1`
  width: 60%;
  margin-top: 75px;
  font-size: 45px;

  @media only screen and (max-width: 480px) {
    font-size: 28px;
  }
`;
const Desc = styled.p`
  width: 60%;
  font-size: 24px;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 10px 20px;
  margin-right: 50px;
  border: 2px solid white;
  border-radius: 10%;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: crimson;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: crimson;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    justify-content: center;
  }
`;
const ContactText = styled.p`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Premium Dijital Reklam Ajansı</Title>
        <Desc>
          Kurumsal kimliğinizi yansıtan güzel tasarlanmış mobil uyumlu modern
          web tasarımları ile SEO SEM SMM ile yeni nesil dijital pazarlama
        </Desc>
        <Info>
          <Button>Hemen Ara</Button>
          <Contact>
            <Phone>0212 987 24 54</Phone>
            <ContactText>Bizi arayarak teklif alabiilrsiniz</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Hacivat} />
      </Right>
    </Container>
  );
};

export default Intro;
