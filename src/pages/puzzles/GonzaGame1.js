import styled from "styled-components";

import { useState } from "react";

export const GonzaGame1 = () => {
  const [clicked, setClicked] = useState(false);
  const [passed, setPassed] = useState(false);
  const [coorX, setCoorX] = useState(false);
  const [coorY, setCoorY] = useState(false);

  document.addEventListener("mousemove", mousePos);
  document.addEventListener("click", mouseClick);

  function mousePos(event) {
    event.preventDefault();
    // console.log("X:", event.clientX);
    // console.log("Y:", event.clientY);
    setCoorX(event.clientX);
    setCoorY(event.clientY);

    if (
      event.clientX > 325 &&
      event.clientX < 400 &&
      event.clientY > 750 &&
      event.clientY < 840
    ) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }

  function mouseClick(event) {
    if (clicked) {
      console.log("AAAAA");
      document.removeEventListener("mousemove", mousePos);
      document.removeEventListener("click", mouseClick);
      setPassed(true);
      alert("You find Waldo");
    }
  }

  return (
    <Container>
      X: {coorX} Y: {coorY} {String(clicked)}
    </Container>
  );
};

const Container = styled.div`
  top: 65px;
  left: 0;
`;

const Button = styled.button`
  z-index: 9;
  margin: 610px 0 0 380px;
  margin-top: 15;
  width: 60px;
  height: 100px;
  opacity: 0.7;
`;

const Box = styled.div`
  opacity: 0.7;
  background: #0057e3;
`;
