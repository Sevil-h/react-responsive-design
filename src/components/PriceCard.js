import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    padding: 10px;
    margin-right: 0;
    margin-bottom: 10px;
  } ;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  } ;
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;
  @media only screen and (max-width: 480px) {
    display: none;
  } ;
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 14px;
  } ;
`;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 12px;
  } ;
`;

function PriceCard({ price, type }) {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>

      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>{" "}
      </List>
      <Button>Join Now</Button>
    </Container>
  );
}

export default PriceCard;
