import React from "react";
import styled from "styled-components";

const Square = styled.div`
  background-color: #4e6bff;
  width: 60px;
  height: 60px;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  opacity: 0.7;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  background-color: #ff97af;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  opacity: 0.7;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Rect = styled.div`
  background-color: #669966;
  width: 50px;
  height: 100px;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  opacity: 0.7;
  animation: rect 25s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

function AnimatedShape() {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
}

export default AnimatedShape;
