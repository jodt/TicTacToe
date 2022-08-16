import React from "react";
import "./InfosDisplay.css";

export default function InfosDisplay({ winner, squaresStates, nextplayer }) {
  return (
    <div classeName="InfosDisplay">
      {winner ? (
        <h2 className="winner">
          <span className="firstAnim">Winner is&nbsp;</span>
          <span className="secondAnim">{winner}</span>
        </h2>
      ) : squaresStates.includes(null) ? (
        <h2>Next player: {nextplayer ? "X" : "O"}</h2>
      ) : (
        <h2> Egalité</h2>
      )}
    </div>
  );
}
