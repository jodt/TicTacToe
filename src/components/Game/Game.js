import React from "react";
import Square from "../Square/Square";
import "./Game.css";
import Score from "../Score/Score";
import Button from "../Button/Button";
import InfosDisplay from "../InfosDisplay/InfosDisplay";

export default function Game({
  winner,
  squaresStates,
  nextplayer,
  scoreXPlayer,
  scoreOPlayer,
  handleNewGame,
  handleSquaresState,
  winnerPos,
}) {
  return (
    <>
      <InfosDisplay
        winner={winner}
        squaresStates={squaresStates}
        nextplayer={nextplayer}
      />
      <div className="Board">
        <Score score={scoreXPlayer}>X :</Score>
        <div className="Game">
          {squaresStates.map((value, index) => {
            return (
              <Square
                value={value}
                key={index}
                squareId={index}
                onClick={() => handleSquaresState(index)}
                winnerPositions={winnerPos}
              />
            );
          })}
        </div>
        <Score score={scoreOPlayer}>O :</Score>
      </div>
      <div>
        <Button onClick={() => handleNewGame()}> Une autre partie?</Button>
        <Button onClick={() => handleNewGame(true)}>
          Mettre les scores à zero
        </Button>
      </div>
    </>
  );
}
