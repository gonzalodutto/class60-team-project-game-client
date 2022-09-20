import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonGrn } from "../../styled";

export const GonzaGame2 = () => {
  const [answer, setAnswer] = useState(false);
  // const opticalllusions

  function holdAnswer(e) {
    console.log(e.target.value);
    setAnswer(e.target.value);
  }

  return (
    <Container>
      <Paragraph>
        What's in the picture?
        <input
          type="password"
          id="pwd"
          name="pwd"
          onChange={(e) => holdAnswer(e)}
          style={{ margin: "1rem" }}
        ></input>
        {answer === "donut" ? <ButtonGrn>Next game</ButtonGrn> : ""}
      </Paragraph>
      <Image alt="Magic eye puzzle" src="https://i.imgur.com/bHUnRQW.jpg" />

      <HorizontalContainer>
        <Paragraph>
          <LinkTo
            href="https://en.wikipedia.org/wiki/Autostereogram"
            target="_blank"
          >
            {" "}
            More info{" "}
          </LinkTo>
          {" | "}
          <LinkTo
            href="https://piellardj.github.io/stereogram-solver/"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </LinkTo>
        </Paragraph>
      </HorizontalContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 65px;
  left: 0;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

const Image = styled.img`
  width: 70%;
  float: left;
  margin-right: 10px;
  border: 10px solid black;
`;

const Paragraph = styled.p`
  font-family: "Press Start 2P", cursive;
`;

const LinkTo = styled.a`
  font-size: 1rem;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: #02d9fa;
  }
`;
