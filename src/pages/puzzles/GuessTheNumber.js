import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

let guessCount = 0;

export const GuessTheNumber = () => {
  const navigate = useNavigate();
  const [valueUser, setValueUser] = useState("");
  const [results, setResult] = useState("");
  const [failed, setFailed] = useState(false);
  const [passed, setPassed] = useState(false);

  const submitGuess = () => {
    if (failed || passed) {
      return;
    }

    const userGuess = valueUser;
    if (userGuess === randomNumber) {
      setPassed(true);

      setResult(
        <>
          <TextGame>Congratulations, you got it right!</TextGame>
          {/* Button navigates to next games, not working for now..  */}
          <ButtonYel
            onClick={(e) => {
              e.preventDefault();
              navigate("/puzzle1");
            }}
          >
            Next game
          </ButtonYel>
        </>
      );
    } else if (userGuess > randomNumber && guessCount !== 10) {
      setResult(
        <TextGame style={{ color: "tomato" }}>
          Last guess was too high!
        </TextGame>
      );
    } else if (
      userGuess < randomNumber &&
      userGuess !== "" &&
      guessCount !== 10
    ) {
      setResult(
        <TextGame style={{ color: "tomato" }}>Last guess was too low!</TextGame>
      );
    } else if (
      parseInt(userGuess) !== parseInt(randomNumber) &&
      parseInt(guessCount) === parseInt(10)
    ) {
      setFailed(true);
      setResult(
        <>
          <TextGame style={{ color: "tomato" }}>!!! GAME OVER !!!</TextGame>
          <ButtonGrn
            onClick={(e) => {
              e.preventDefault();
              navigate("/Guessthenumber");
            }}
          >
            Restart game
          </ButtonGrn>
        </>
      );
    }

    guessCount++;
    console.log("Guess count: ", guessCount);
  };

  console.log(randomNumber);

  return (
    <Container>
      <div>
        {passed || failed ? null : (
          <>
            <Title2>Guess the number</Title2>
            <TextGame>
              We have selected a random number between 1 and 100. See if you can
              guess it in 10 turns or fewer. We'll tell you if your guess was
              too high or too low.
            </TextGame>
            <Input
              value={valueUser}
              onChange={(event) => setValueUser(parseInt(event.target.value))}
              placeholder="Enter a guess"
            />

            <br />
            <ButtonBlue type="submit" onClick={submitGuess}>
              Guess
            </ButtonBlue>
          </>
        )}
        {results}
      </div>
    </Container>
  );
};
