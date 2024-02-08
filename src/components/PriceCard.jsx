import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-right: 30px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 9px 5px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 9px 5px rgba(0, 0, 0, 0.45);

  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    padding: 0;
  }
`;
const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;
const Price = styled.div`
  font-size: 50px;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
const PricePlan = styled.button`
  width: 100px;
  padding: 10px;
  border: 1.5px solid crimson;
  border-radius: 20px;
  color: crimson;
  font-size: 12px;
  background-color: white;
`;
const PriceUl = styled.ul`
  list-style: none;
`;
const PriceLi = styled.li`
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    margin-top: 10px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  width: 100px;
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  color: white;
  background-color: darkblue;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const PriceCard = ({ price, plan }) => {
  return (
    <Container>
      <PriceSection>
        $<Price>{price}</Price>/ month
      </PriceSection>
      <PricePlan>{plan}</PricePlan>
      <PriceUl>
        <PriceLi>100 Sayfa Tasarım</PriceLi>
        <PriceLi>SEO Çalışması</PriceLi>
        <PriceLi>Sosyal Medya Entegrasyonu</PriceLi>
        <PriceLi>Ücretsiz Hosting</PriceLi>
      </PriceUl>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
