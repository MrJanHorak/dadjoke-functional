import React, { useState } from 'react';

//components
import Dadbar from './components/Dadbar';
import Joke from './components/Joke';
import Button from './components/Button';

//assests
import './App.css';

function App() {
  //setState variables
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jokes, setJokes] = useState([]);

  //variables

  //functions

  const goFetch = async (e) => {
    e.preventDefault();

    await fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: { Accept: 'application/json' },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setJokes(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  return (
    <>
      <Dadbar />
      <Joke isLoaded={isLoaded} jokes={jokes} error={error} />
      <Button goFetch={goFetch} />
    </>
  );
}

export default App;
