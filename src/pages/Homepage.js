import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h3>Hello there 👋</h3>
      <p>General information:</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/puzzle1");
        }}
      >
        Puzzle
      </button>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
