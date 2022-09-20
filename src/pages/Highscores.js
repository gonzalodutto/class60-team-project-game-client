import { useState } from "react";
import { Container, TextGame } from "../styled";

export const Highscores = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Jesse", score: Math.round(Math.random() * 100000) + 1 },
    { id: 2, name: "Gonza", score: Math.round(Math.random() * 100000) + 1 },
    { id: 3, name: "Miriam", score: Math.round(Math.random() * 100000) + 1 },
    { id: 4, name: "Renu", score: Math.round(Math.random() * 100000) + 1 },
  ]);

  // Sort by score
  const playersSorted = [...players].sort(
    (playerA, playerB) => playerB.score - playerA.score
  );

  return (
    <Container>
      {playersSorted.map((player, index) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <TextGame>{player.name}</TextGame>
            </div>
            <div style={{ flex: 1 }}>
              <TextGame>{player.score}</TextGame>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
