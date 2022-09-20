import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const PointToPointCursor = () => {
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const [passed, setPassed] = useState(false);
  let field, width, height, startX, startY;
  document.addEventListener("mousemove", mousePos);

  window.onload = function () {
    field = document.getElementById("field");
    startX = field.getBoundingClientRect().left;
    startY = field.getBoundingClientRect().top;
    width = parseInt(field.offsetWidth);
    height = parseInt(field.offsetHeight);
  };

  function mousePos(event) {
    if (
      event.clientX < startX + 50 &&
      event.clientY < startY + 50 &&
      event.clientX > startX &&
      event.clientY > startY
    ) {
      console.log("Start");
    } else if (event.clientX > width - 50 && event.clientY > height - 50) {
      document.removeEventListener("mousemove", mousePos);
      console.log("END");
      setPassed(true);
    } else if (!passed) {
      setFailed(true);
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
      <Continue style={{ zIndex: passed ? 10 : -10 }}>
        You passed the test, on to the next one!
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/puzzle2");
          }}
        >
          Next problem
        </button>
      </Continue>
      <Start></Start>
      <Finish></Finish>
      <Field id="field" />
    </Whole>
  );
};

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
  min-width: 300px;
  min-height: 200px;
`;
