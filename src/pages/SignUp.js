import styled from "styled-components";
import { ButtonGrn, Input, Title1 } from "../styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(signUp(name, email, password));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Title1>Sign Up</Title1>
        <form onSubmit={submitForm}>
          <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <ButtonGrn type="submit">Sign Up</ButtonGrn>
        </form>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  margin: 15%;
`;
