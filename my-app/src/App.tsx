import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Block from "./components/block";
import { useState } from "react";

function App() {
  const [state, setstate] = useState(Array(9).fill(null));
  const [currentTurn, setcurrentTurn] = useState("X");

  const checkWinner = (state: any[]) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerLogic.length; i++) {
      const [a, b, c] = winnerLogic[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const handleClick = (index: number) => {
    if (state[index] != null) return;
    const stateCopy = Array.from(state);
    stateCopy[index] = currentTurn;

    setstate(stateCopy);

    const win = checkWinner(stateCopy);
    if (win) {
      alert(`${currentTurn} won the game`);
      return;
    }

    // Check for a draw
    if (stateCopy.every((entry) => entry !== null)) {
      alert("It's a draw!");
      return;
    }

    setcurrentTurn(currentTurn === "X" ? "0" : "X");
  };

  return (
    <div className="board">
      <div className="row">
        <Block onClick={() => handleClick(0)} value={state[0]} />
        <Block onClick={() => handleClick(1)} value={state[1]} />
        <Block onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onClick={() => handleClick(3)} value={state[3]} />
        <Block onClick={() => handleClick(4)} value={state[4]} />
        <Block onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Block onClick={() => handleClick(6)} value={state[6]} />
        <Block onClick={() => handleClick(7)} value={state[7]} />
        <Block onClick={() => handleClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
