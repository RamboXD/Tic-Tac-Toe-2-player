import TicTacToe from "./TicTacToe";
import Main from "./Main";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import Batya from "./Batya";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<TicTacToe />} path="/twoplayer" />
        <Route element={<Batya/>} path="/batya"/>
      </Routes>
    </div>
  );
}

export default App;
