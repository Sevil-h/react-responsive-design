import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
  background: url("https://decondesigns.com/wp-content/uploads/2015/06/background-pattern-design-33.jpg");
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  margin: 50px;
`;

const Title = styled.h1`
  margin-bottom: 25px;
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  jsutify-content: center;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
`;
const TextArea = styled.input`
  width: 200px;
  height: 60%;
  padding: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

function Contact() {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your name" />
              <Input placeholder="Your email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 324 2312 3213</Text>
            <Text>+1 324 2312 2343</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@agency.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
}

export default Contact;
