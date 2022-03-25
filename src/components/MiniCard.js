import React from "react";
import styled from "styled-components";
import Search from "../img/search.png";

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 780px) {
    width: 50px;
  } ;
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 14px;
  } ;
`;

function MiniCard() {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </Container>
  );
}

export default MiniCard;
