import React from "react";
import styled from "styled-components";
import Graphic from "../Image/graphic.png";

const Container = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 30%;
    padding: 40px 20px;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 150px 75px;

  @media only screen and (max-width: 480px) {
    width: 80%;
    height: 70%;
    padding: 40px;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;

  @media only screen and (max-width: 480px) {
    width: 300px;
    height: 200px;
  }
`;

const Title = styled.span`
  font-size: 45px;
`;
const SubTitle = styled.span`
  font-size: 45px;
`;
const Desc = styled.p`
  font-size: 18px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  color: white;
  background-color: crimson;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image Src={Graphic} />
      </Left>
      <Right>
        <Title>
          <b>Mobil</b> Uyumlu
        </Title>
        <SubTitle>
          <b>Web</b> Tasarımı
        </SubTitle>
        <Desc>
          Modern ve fonksiyonel web tasarımları ile kurumsal kimliğinizi dijital
          dünyaya taşıyın.
        </Desc>
        <Button>Daha Fazla</Button>
      </Right>
    </Container>
  );
};

export default Feature;
