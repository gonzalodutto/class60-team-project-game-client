import { useState } from "react";
import {
  ButtonBlue,
  ButtonGrn,
  ButtonYel,
  Container,
  Input,
  TextGame,
  Title2,
} from "../../styled";

let randomNumber = Math.round(Math.random() * 100) + 1;
console.log("Random number: ", randomNumber);

let guessCount = 0;

export const GuessTheNumber = () => {
  const [valueUser, setValueUser] = useState("");
  const [results, setResult] = useState("");

  const submitGuess = () => {
    const userGuess = valueUser;
    console.log("User guess: ", typeof userGuess);
    if (userGuess === randomNumber) {
      setResult(
        <>
          <TextGame>Congratulations, you got it right!</TextGame>
          {/* Button navigates to next games, not working for now..  */}
          <ButtonYel type="submit">Next game</ButtonYel>
        </>
      );
    } else if (userGuess > randomNumber) {
      setResult(
        <TextGame style={{ color: "tomato" }}>
          Last guess was too high!
        </TextGame>
      );
    } else if (userGuess < randomNumber && userGuess !== "") {
      setResult(
        <TextGame style={{ color: "tomato" }}>Last guess was too low!</TextGame>
      );
    } else if (userGuess !== randomNumber && guessCount === 10) {
      setResult(
        <>
          <TextGame style={{ color: "tomato" }}>!!! GAME OVER !!!</TextGame>
          <ButtonGrn type="submit">Restart game</ButtonGrn>
        </>
      );
    }

    guessCount++;
    console.log("Guess count: ", guessCount);
  };

  return (
    <Container>
      <Title2>Guess the number</Title2>
      <TextGame>
        We have selected a random number between 1 and 100. See if you can guess
        it in 10 turns or fewer. We'll tell you if your guess was too high or
        too low.
      </TextGame>
      <div>
        <Input
          value={valueUser}
          onChange={(event) => setValueUser(parseInt(event.target.value))}
          placeholder="Enter a guess"
        />
        <br />
        <ButtonBlue type="submit" onClick={submitGuess}>
          Guess
        </ButtonBlue>
        {results}
      </div>
    </Container>
  );
};
