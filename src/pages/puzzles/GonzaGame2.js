import { useState } from "react";
import styled from "styled-components";

export const GonzaGame2 = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Container>
      <Image alt="Magic eye puzzle" src="https://i.imgur.com/bHUnRQW.jpg" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 65px;
  left: 0;
`;

const Image = styled.img`
  width: 70%;
  float: left;
  margin-right: 10px;
  border: 10px solid black;
`;
