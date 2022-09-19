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
  return (
    <Container>
      <Title1>Hello there</Title1>
      <Title2>Hello there</Title2>
      <TextGame>
        This is a text to test how the font and font sizes are looking. What do
        you think?
      </TextGame>

      <ButtonBlue>Restart</ButtonBlue>
      <ButtonGrn>Start game</ButtonGrn>
      <ButtonYel>Next game</ButtonYel>
      <ButtonRed>Game over</ButtonRed>
    </Container>
  );
};
