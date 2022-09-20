import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import {
  getUserWithStoredToken,
  updateHighscore,
} from "../../store/user/thunks";
import {
  Container,
  Title1,
  Title2,
  TextGame,
  ButtonBlue,
  ButtonGrn,
  ButtonYel,
  ButtonRed,
} from "../../styled";

export const PointToPointCursor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    dispatch(getUserWithStoredToken());
  }, [token, navigate]);
  const user = useSelector(selectUser);
  console.log(user);

  const [failed, setFailed] = useState(false);
  const [passed, setPassed] = useState(false);
  let field, width, height, startX, startY;
  document.addEventListener("mousemove", mousePos);

  window.onload = function () {
    field = document.getElementById("field");
    width = parseInt(field.offsetWidth);
    height = parseInt(field.offsetHeight);
  };

  function mousePos(event) {
    if (event.clientX < 200 && event.clientY > 320 && event.clientY < 370) {
      console.log("Start");
    } else if (event.clientX > width - 200 && event.clientY > height - 50) {
      document.removeEventListener("mousemove", mousePos);
      console.log("END");
      setPassed(true);
    } else if (!passed) {
      document.removeEventListener("mousemove", mousePos);
      setFailed(true);
    }
  }

  return (
    <Whole>
      <Top>
        <TextGame>
          Start with the cursor on "START" and try to get to the finish without
          touching the abyss
        </TextGame>
      </Top>
      <Bottom>
        <ButtonBlue
          onClick={(e) => {
            window.location.reload();
          }}
          style={{
            zIndex: failed ? 10 : -10,
            height: "50px",
            width: "200px",
            margin: "0",
            padding: "0",
          }}
        >
          <TextGame>Restart</TextGame>
        </ButtonBlue>
        <Continue style={{ zIndex: passed ? 10 : -10 }}>
          <TextGame>You passed the test, on to the next one!</TextGame>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(updateHighscore(user.id, 1, 1));
              navigate("/puzzle2");
            }}
          >
            <TextGame>Next problem</TextGame>
          </button>
        </Continue>
        <Start>
          <TextGame>START</TextGame>
        </Start>
        <Finish>
          <TextGame>FINISH</TextGame>
        </Finish>
        <Field id="field" />
      </Bottom>
    </Whole>
  );
};

const Top = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  display: flex;
`;

const Whole = styled.div`
  display: flex;
  flex-direction: column;
  maring: 0;
`;

const Field = styled.div`
  display: flex;
  position: fixed;
  margin: auto;
  height: 100%;
  width: 100%;
  background-color: black;
`;

const Start = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  background-color: white;
  z-index: 1;
`;

const Finish = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  background-color: green;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const Restart = styled.button`
  position: absolute;
  width: 200px;
  height: 50px;
  background-color: red;
  z-index: 1;
`;

const Continue = styled.div`
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  color: white;
  left: 40%;
  top: 40%;
  margin: auto;

  background-color: blue;
  height: 20%;
  width: 20%;
  min-width: 300px;
  min-height: 200px;
`;
