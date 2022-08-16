import React from "react";
import "./Square.css";
import { winnerStyle } from "./WinnerStyle";

export default function Square({ value, onClick, winnerPositions, squareId }) {
  return (
    <button
      className="Square"
      onClick={onClick}
      style={
        winnerPositions && winnerPositions.includes(squareId)
          ? winnerStyle
          : null
      }
    >
      {value}
    </button>
  );
}
