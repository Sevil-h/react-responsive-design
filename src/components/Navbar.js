import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 2rem;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  @media only screen and (max-width: 480px) {
    display: none;
  } ;
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid white;
  padding: 10px 15px;
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 10px;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <span>
          <Button>JOIN NOW</Button>
        </span>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
