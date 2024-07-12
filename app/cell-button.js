import { useState } from "react";

export default function NewCell({ value, onSquareClick }) {
  const [cellClass, setCellClass] = useState("cell");

  if (value !== null) {
    setTimeout(() => {
      setCellClass("cell show");
    }, 50);
  }

  return (
    <button className={cellClass} onClick={onSquareClick}>
      {value}
    </button>
  );
}
