import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const ScaryLabyrinth = () => {
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const [passed, setPassed] = useState(false);
  let field, width, height, startX, startY;
  let corOne,
    corTwo = [];

  document.addEventListener("mousemove", mousePos);

  window.onload = function () {
    field = document.getElementById("field");
    startX = field.getBoundingClientRect().left;
    startY = field.getBoundingClientRect().top;
    width = parseInt(field.offsetWidth);
    height = parseInt(field.offsetHeight);
    corOne = [
      parseInt(width * 0.05),
      parseInt(height * 0.2),
      parseInt(width * 0.7),
      parseInt(height * 0.22),
    ];
    corTwo = [
      parseInt(width * 0.58),
      parseInt(height * 0.2),
      parseInt(width * 0.6),
      parseInt(height * 0.48),
    ];
  };

  window.onresize = function () {
    field = document.getElementById("field");
    startX = field.getBoundingClientRect().left;
    startY = field.getBoundingClientRect().top;
    width = parseInt(field.offsetWidth);
    height = parseInt(field.offsetHeight);
    corOne = [
      parseInt(width * 0.05),
      parseInt(height * 0.2),
      parseInt(width * 0.7),
      parseInt(height * 0.22),
    ];
    corTwo = [
      parseInt(width * 0.58),
      parseInt(height * 0.2),
      parseInt(width * 0.6),
      parseInt(height * 0.48),
    ];
  };

  function mousePos(event) {
    if (
      event.clientX < startX + 50 &&
      event.clientY < startY + 50 &&
      event.clientX > startX &&
      event.clientY > startY
    ) {
      console.log("START");
    } else if (event.clientX > width - 50 && event.clientY > height - 50) {
      document.removeEventListener("mousemove", mousePos);
      console.log("END");
      setPassed(true);
    } else if (
      (corOne &&
        event.clientX > corOne[0] &&
        event.clientX < corOne[2] &&
        event.clientY > corOne[1] &&
        event.clientY < corOne[3]) ||
      (corTwo &&
        event.clientX > corTwo[0] &&
        event.clientX < corTwo[2] &&
        event.clientY > corTwo[1] &&
        event.clientY < corTwo[3])
    ) {
      console.log("PATH");
    } else {
      if (!passed) {
        document.removeEventListener("mousemove", mousePos);
        setFailed(true);
      }
    }
  }

  return (
    <Whole>
      <Restart
        onClick={(e) => {
          window.location.reload();
        }}
        style={{ zIndex: failed ? 10 : -10 }}
      >
        Restart
      </Restart>
      {failed ? (
        <img
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 9,
          }}
          alt="image"
          src="https://store-images.microsoft.com/image/apps.6779.9007199266247465.5c14b1f2-f6e9-47d6-926c-29e5776aaefa.72f11b51-8827-4050-8491-32c87caeb715?mode=scale&q=90&h=300&w=300"
        />
      ) : null}
      <Continue style={{ zIndex: passed ? 10 : -10 }}>
        See, that wasn't so hard now, was it?
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/puzzle3");
          }}
        >
          Next problem
        </button>
      </Continue>
      <Start></Start>
      <CorridorOne />
      <CorridorTwo />
      <CorridorThree />
      <CorridorFour />
      <CorridorFive />
      <CorridorSix />
      <Finish></Finish>
      <Field id="field" />
    </Whole>
  );
};

const StartMessage = styled.div`
  position: absolute;
  width: 30%;
  height: 20%;
  min-width: 300px;
  min-height: 200px;
`;

const Whole = styled.div`
  display: flex;
  height: 100vh;
  width: 100hw;
`;

const Field = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  width: 100%;
  background-color: black;
`;

const Start = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: white;
`;

const Finish = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: green;
  bottom: 0;
  right: 0;
`;

const CorridorOne = styled.div`
  background-color: white;
  position: absolute;
  width: 55%;
  height: 2%;
  left: 5%;
  top: 20%;
`;

const CorridorTwo = styled.div`
  background-color: white;
  position: absolute;
  width: 0.3%;
  height: 40%;
  left: 60%;
  top: 20%;
`;

const CorridorThree = styled.div`
  background-color: white;
  position: absolute;
  width: 40%;
  height: 3%;
  left: 22%;
  top: 60%;
`;

const CorridorFour = styled.div`
  background-color: white;
  position: absolute;
  width: 4%;
  height: 20%;
  left: 20%;
  top: 60%;
`;

const CorridorFive = styled.div`
  background-color: white;
  position: absolute;
  width: 75%;
  height: 10%;
  left: 20%;
  top: 75%;
`;

const CorridorSix = styled.div`
  background-color: white;
  position: absolute;
  width: 3px;
  height: 10%;
  right: 5%;
  bottom: 5%;
`;

const Restart = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: red;
`;

const Continue = styled.div`
  flex-direction: column;
  display: flex;
  color: white;
  left: 40%;
  top: 40%;
  margin: auto;
  position: absolute;
  background-color: blue;
  height: 20%;
  width: 20%;
`;
