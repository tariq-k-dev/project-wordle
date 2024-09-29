import React from 'react';

function UserGuess({ gameOver, getGuess, isWinner, currentRow, answer }) {
  const [userInput, setUserInput] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    getGuess(userInput);
    setUserInput('');
  }

  if (isWinner) {
    return (
      <div className='guess-input-wrapper'>
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in&nbsp;
            <strong>{currentRow} guesses</strong>.
          </p>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className='guess-input-wrapper'>
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        pattern={!gameOver ? '[A-Za-z]{5}' : null}
        value={!gameOver ? userInput : 'Game over!'}
        onChange={(event) => setUserInput(event.target.value.toUpperCase())}
        title='Requires 5 letters'
        disabled={gameOver || isWinner}
        autoFocus
      />
    </form>
  );
}

export default UserGuess;
