import styled from "styled-components";
import Magnifier from "react-magnifier";
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
      event.clientY > 450 &&
      event.clientY < 540
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
      X: {coorX}
      <br />
      Y: {coorY}
      <Magnifier
        src={"https://wallyplant.files.wordpress.com/2011/09/goldrush.jpg"}
        width={1900}
      />
      {/* <img
        src="https://wallyplant.files.wordpress.com/2011/09/goldrush.jpg"
        alt="Find Waldo"
      /> */}
      {/* <Box>
        <Button>Ok</Button>
      </Box> */}
    </Container>
  );
};

const Container = styled.div`
  /* margin: 20px; */
  position: absolute;
  top: 65px;
  left: 0;
`;

const Button = styled.button`
  z-index: 9;
  margin: 610px 0 0 380px;
  margin-top: 15;
  /* background: #009938; */
  width: 60px;
  height: 100px;
  opacity: 0.7;
`;

const Box = styled.div`
  /* width: 5%;
  height: 5%; */
  opacity: 0.7;
  background: #0057e3;
`;
