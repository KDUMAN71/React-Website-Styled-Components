import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;

  @media only screen and (max-width: 480px) {
    height: 10%;
  }
`;
const List = styled.ul`
  display: flex;
  list-style: none;
`;
const ListItem = styled.li`
  margin-right: 20px;
`;
const Copyright = styled.span`
  margin-right: 50px;
`;

const Footer = () => {
  return (
    <Container>
      <List>
        <ListItem>Menu</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Blog</ListItem>
      </List>
      <Copyright>Copyright &copy;</Copyright>
    </Container>
  );
};

export default Footer;
