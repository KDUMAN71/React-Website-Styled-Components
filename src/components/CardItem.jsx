import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 120px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 9px 5px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 9px 5px rgba(0, 0, 0, 0.45);

  @media only screen and (max-width: 480px) {
    width: 80px;
    margin: 10px;
    padding: 10px;
  }
`;

const Image = styled.img`
  width: 75px;
  object-position: contain;

  @media only screen and (max-width: 480px) {
    width: 40px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 15px;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Desc = styled.p`
  font-size: 14px;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const CardItem = (props) => {
  return (
    <Container>
      <Image src={props.resim} />
      <Title>{props.baslik}</Title>
      <Desc>{props.aciklama}</Desc>
    </Container>
  );
};

export default CardItem;
