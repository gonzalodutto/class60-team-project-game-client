import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { Container, TextGame, Title1, Title2 } from "../styled";

export const Highscores = () => {
  const user = useSelector(selectUser);
  const players = [
    { id: 1, name: "Jesse", score: Math.round(Math.random() * 100000) + 1 },
    { id: 2, name: "Gonza", score: Math.round(Math.random() * 100000) + 1 },
    { id: 3, name: "Miriam", score: Math.round(Math.random() * 100000) + 1 },
    { id: 4, name: "Renu", score: Math.round(Math.random() * 100000) + 1 },
  ];

  let num = 0;

  players.map((player) => {
    if (num === 0) {
      num = player.score;
    } else if (num > player.score) {
      num = player.score;
    }
    return 0;
  })

  num = num - 1;


  // Sort by score
  const playersSorted = [...players].sort(
    (playerA, playerB) => playerB.score - playerA.score
  );

  return (user ?
    <Container>
      <Title1>Congratulations!</Title1>
      <Title2>You have already secured last place!</Title2>
      {playersSorted.map((player) => {
        return (
          <div key={player.id} style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <TextGame>{player.name}</TextGame>
            </div>
            <div style={{ flex: 1 }}>
              <TextGame>{player.score}</TextGame>
            </div>
          </div>
        );
      })}
      <div key={user.id} style={{ display: "flex", color: "tomato" }}>
            <div style={{ flex: 1 }}>
      <TextGame>{user.name}</TextGame></div><div style={{ flex: 1 }}>
      <TextGame>{num}</TextGame></div></div>
    </Container> : "loading"
  );
};
