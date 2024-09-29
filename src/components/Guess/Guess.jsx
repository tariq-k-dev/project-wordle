import React from 'react';

function Guess({ cid, result }) {

  return (
    <>
      <span
        data-cid={cid}
        key={cid}
        className={!result ? 'cell' : `cell ${result.status}`}
      >
        {!result ? '' : result.letter}
      </span>
    </>
  );
}

export default Guess;
