import { useNavigate } from "react-router-dom";
import {
  Container,
  Title1,
  Title2,
  TextGame,
  ButtonBlue,
  ButtonGrn,
  ButtonYel,
  ButtonRed,
} from "../styled";

export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title1>Hello there</Title1>
      <Title2>Hello there</Title2>
      <TextGame>
        This is a text to test how the font and font sizes are looking. What do
        you think?
      </TextGame>

      <ButtonBlue onClick={(e) => {e.preventDefault(); navigate("/PointToPointCursor")}}>Restart</ButtonBlue>
      <ButtonGrn onClick={(e) => {e.preventDefault(); navigate("/PointToPointCursor")}}>Start game</ButtonGrn>
      <ButtonYel onClick={(e) => {e.preventDefault(); navigate("/PointToPointCursor")}}>Next game</ButtonYel>
      <ButtonRed>Game over</ButtonRed>
    </Container>
  );
};
