import React from 'react';
import UserGuess from '../UserGuess';
import UserGuesses from '../UserGuesses';

import { sample, range } from '/src/assets/utils';
import { WORDS } from '/src/assets/data';
import { NUM_OF_GUESSES_ALLOWED } from '/src/assets/constants';
import { checkGuess } from '/src/assets/game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log(JSON.stringify({ answer }, null, 2));

function Game() {
  const createCells = () =>
    range(0, 5).map(() => ({
      cid: crypto.randomUUID(),
      value: '',
    }));
  const gridRows = range(0, NUM_OF_GUESSES_ALLOWED).map(() => ({
    pid: crypto.randomUUID(),
  }));
  const gameGrid = gridRows.map((gridRow) => ({
    ...gridRow,
    rowCells: createCells(),
  }));
  const [gameCells, setGameCells] = React.useState(gameGrid);
  const [currentRow, setCurrentRow] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [isWinner, setIsWinner] = React.useState(false);

  function getGuess(userGuess) {
    if (userGuess === answer) {
      setIsWinner(true);
    }

    const results = checkGuess(userGuess, answer);
    const cellsCopy = [...gameCells];
    const { pid, rowCells } = cellsCopy[currentRow];
    const newCells = rowCells.map((cell, i) => ({
      ...cell,
      result: results[i],
    }));

    cellsCopy[currentRow] = { pid, rowCells: newCells };
    setGameCells(cellsCopy);
    setCurrentRow(currentRow + 1);

    if (currentRow >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameOver(true);
      return;
    }
  }

  return (
    <>
      <UserGuesses gameCells={gameCells} />
      <UserGuess
        gameOver={gameOver}
        getGuess={getGuess}
        isWinner={isWinner}
        currentRow={currentRow}
        answer={answer}
      />
    </>
  );
}

export default Game;
