import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Prices = () => {
  return (
    <Container>
      <PriceCard price={10} plan={"Basic"} />
      <PriceCard price={20} plan={"Professional"} />
      <PriceCard price={30} plan={"Premium"} />
    </Container>
  );
};

export default Prices;
