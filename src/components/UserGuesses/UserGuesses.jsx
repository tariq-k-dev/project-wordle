import React from 'react';
import Guess from '../Guess/Guess';

function UserGuesses({ gameCells }) {
  return (
    <div className='guess-results'>
      {gameCells.map(({ pid, rowCells }) => {
        return (
          <p data-pid={pid} key={pid} className='guess'>
            {rowCells.map(({ cid, result }, i) => (
              <Guess
                key={cid}
                cid={cid}
                result={result}
              />
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default UserGuesses;
