import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <Nav>
      <Logo to="/">
        <span style={{ color: "#02d9fa" }}>P</span>
        <span style={{ color: "#92cd41" }}>L</span>
        <span style={{ color: "gold" }}>A</span>
        <span style={{ color: "tomato" }}>Y</span>
        4ever
      </Logo>
      <MenuLink to="/empty"></MenuLink>
      <MenuLink to="/highscores">Highscores</MenuLink>
      {token ? (
        <Logout onClick={() => dispatch(logOut())}>Logout</Logout>
      ) : (
        <MenuLink to="/login">Login</MenuLink>
      )}
    </Nav>
  );
};

const Nav = styled.div`
  font-family: "Press Start 2P", cursive;
  background: #ffffff;

  margin: 4rem;
  padding: 1rem 0 2rem;
  border-bottom: 5px solid;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
`;

const Logo = styled(Link)`
  font-size: 3.5rem;
  color: #000000;
  text-decoration: none;
`;

const MenuLink = styled(Link)`
  font-size: 1rem;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: #02d9fa;
  }
`;

const Logout = styled.button`
  font-family: "Press Start 2P", cursive;
  font-size: 1rem;
  color: #000000;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #02d9fa;
  }
`;
