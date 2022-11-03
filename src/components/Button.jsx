import React from 'react';

function Button({goFetch}) {
  return (
    <div className='fetchButton'>
      <button onClick={goFetch}>
        <h1>New Joke</h1>
      </button>
    </div>
  );
}

export default Button;
