import React, { useEffect, useState } from "react";
import { checkWinner } from "../../Helpers/helpers";
import Game from "./Game";

export default function GameContainer() {
  const [squaresStates, setSquaresSates] = useState(Array(9).fill(null));
  const [nextplayer, setNextPlayer] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winnerPos, setWinnerPos] = useState(null);
  const [scoreXPlayer, setscoreXPlayer] = useState(0);
  const [scoreOPlayer, setscoreOPlayer] = useState(0);

  //Check the winner
  useEffect(() => {
    const [winner, winnerPositions] = checkWinner(squaresStates);
    if (winner && winnerPositions) {
      setWinner(winner);
      setWinnerPos(winnerPositions);
    }
  });

  //handle Scores
  useEffect(() => {
    if (winner === "X") {
      setscoreXPlayer((prev) => prev + 1);
    }
    if (winner === "O") {
      setscoreOPlayer((prev) => prev + 1);
    }
  }, [winner]);

  //handle Squares state
  const handleSquaresState = (id) => {
    const squares = squaresStates;
    if (winner || squares[id]) {
      return;
    }
    squares[id] = nextplayer ? "X" : "O";
    setNextPlayer(!nextplayer);
    setSquaresSates(squares);
  };

  //handle new Game
  const handleNewGame = (resetScore = false) => {
    if (resetScore) {
      setscoreXPlayer(0);
      setscoreOPlayer(0);
    }
    setSquaresSates(Array(9).fill(null));
    setWinner(null);
    setWinnerPos(null);
    setNextPlayer(true);
  };

  return (
    <Game
      winner={winner}
      squaresStates={squaresStates}
      nextplayer={nextplayer}
      scoreXPlayer={scoreXPlayer}
      scoreOPlayer={scoreOPlayer}
      handleNewGame={handleNewGame}
      handleSquaresState={handleSquaresState}
      winnerPos={winnerPos}
    />
  );
}
