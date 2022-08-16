import React from "react";
import "./Score.css";

export default function Score({ children, score }) {
  return (
    <div className="Score">
      <span>Score Joueur {children} </span>
      <span>{score}</span>
    </div>
  );
}
