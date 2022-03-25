import React from "react";
import styled from "styled-components";
import Woman from "../img/woman.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  } ;
`;
const Right = styled.div`
  width: 40%;
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  } ;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  } ;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;

const Button = styled.button`
  padding: 15px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  } ;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: grey;
  margin-top: 5px;
`;

const Image = styled.img`
  margin-top: 50px;
  width: 100%;
  @media only screen and (max-width: 480px) {
    display: none;
  } ;
`;

function Intro() {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe taht designing products and services in close partnership
          with our clients is the way to have a real impact on their businesess.
        </Desc>
        <Info>
          <Button>START A PROJECT </Button>
          <Contact>
            <Phone>Call us (012) 345 - 4567</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman}></Image>
      </Right>
      <AnimatedShape />
    </Container>
  );
}

export default Intro;
