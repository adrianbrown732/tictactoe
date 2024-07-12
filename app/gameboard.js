"use client";

import { useState } from "react";
import NewCell from "./cell-button";
import SymbolX from "./x-icon";
import SymbolO from "./o-icon";

export default function GameBoard() {
  const players = [<SymbolX />, <SymbolO />];

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const nextSquares = squares.slice();

    if (nextSquares[i] !== null) {
      return;
    }
    nextSquares[i] = xIsNext ? players[0] : players[1];
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <main className="board">
      <NewCell
        value={squares[0]}
        onSquareClick={() => {
          handleClick(0);
        }}
      />
      <NewCell
        value={squares[1]}
        onSquareClick={() => {
          handleClick(1);
        }}
      />
      <NewCell
        value={squares[2]}
        onSquareClick={() => {
          handleClick(2);
        }}
      />
      <NewCell
        value={squares[3]}
        onSquareClick={() => {
          handleClick(3);
        }}
      />
      <NewCell
        value={squares[4]}
        onSquareClick={() => {
          handleClick(4);
        }}
        style={{
          opacity: 1,
        }}
      />
      <NewCell
        value={squares[5]}
        onSquareClick={() => {
          handleClick(5);
        }}
      />
      <NewCell
        value={squares[6]}
        onSquareClick={() => {
          handleClick(6);
        }}
      />
      <NewCell
        value={squares[7]}
        onSquareClick={() => {
          handleClick(7);
        }}
      />
      <NewCell
        value={squares[8]}
        onSquareClick={() => {
          handleClick(8);
        }}
      />
    </main>
  );
}
