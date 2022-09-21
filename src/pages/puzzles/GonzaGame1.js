import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import {
  getUserWithStoredToken,
} from "../../store/user/thunks";

export const GonzaGame1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    dispatch(getUserWithStoredToken());
  }, [token, navigate, dispatch]);

  const [correct, setCorrect] = useState(false);

  document.addEventListener("mousemove", mousePos);
  document.addEventListener("click", mouseClick);

  function mousePos(event) {
    event.preventDefault();

    if (
      event.clientX > 325 &&
      event.clientX < 400 &&
      event.clientY > 750 &&
      event.clientY < 840
    ) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }

  function mouseClick(event) {
    if (correct) {
      event.preventDefault();
      document.removeEventListener("mousemove", mousePos);
      document.removeEventListener("click", mouseClick);
      alert("You find Waldo");
      navigate("/TicTocToe");
    }
  }

  return (
    <Container>
       <img
        src="https://wallyplant.files.wordpress.com/2011/09/goldrush.jpg"
        alt=""
        width={1900}
      />
    </Container>
  );
};

const Container = styled.div`
  top: 65px;
  left: 0;
`;
