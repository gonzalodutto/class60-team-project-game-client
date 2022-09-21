import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import TicTocToe from "./pages/tic-toc-toe/TicTocToe";
import {
  Homepage,
  Login,
  SignUp,
  PointToPointCursor,
  SmallestDot,
  GonzaGame1,
  GonzaGame2,
  Highscores,
  GuessTheNumber,
} from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/highscores" element={<Highscores />} />
        <Route path="/guessthenumber" element={<GuessTheNumber />} />
        <Route path="/tictoctoe" element={<TicTocToe />} />
        <Route path="/waldo" element={<GonzaGame1 />} />
        <Route path="/magic-eye" element={<GonzaGame2 />} />
        <Route path="/PointToPointCursor" element={<PointToPointCursor />} />
        <Route path="/SmallestDot" element={<SmallestDot />} />
      </Routes>
    </div>
  );
}

export default App;
