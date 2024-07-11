"use client";

import { useState } from "react";

export default function NewCell({ value, onSquareClick }) {
  return (
    <button className="cell" onClick={onSquareClick}>
      {value}
    </button>
  );
}
