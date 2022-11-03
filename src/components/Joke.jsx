import React from 'react';

function Joke({ jokes, isLoaded, error }) {
  console.log(jokes);
  if (error) {
    return (
      <div className='joke'>
        <h1>Error: {error.message}</h1>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className='joke'>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className='joke'>
        <h1>{jokes.joke}</h1>
      </div>
    );
  }
}

export default Joke;
