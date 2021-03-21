import React, { useCallback, useState } from 'react';
import { Loading } from '../Loading/Loading';
import { Button } from '../Button/Button';
import { Joke } from '../Joke/Joke';
import { Error } from '../Error/Error';
import { JokeType, initialJokeState, Status } from '../../types';

import './App.scss';

export const App: React.FunctionComponent = () => {
  const [joke, setJoke] = useState<JokeType>(initialJokeState);
  const [status, setStatus] = useState<Status>(Status.INITIAL);

  const fetchRequest = useCallback(async () => {
    setStatus(Status.LOADING);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const newJoke = await response.json();
      setJoke(newJoke);
      setStatus(Status.SUCCESS);
    } catch {
      setStatus(Status.ERROR);
    }
  }, []);

  if (status === Status.LOADING) return <Loading />;
  if (status === Status.ERROR) return <Error setStatus={setStatus} setJoke={setJoke} />;

  return (
    <div className="app">
      {joke !== initialJokeState && <Joke joke={joke} />}
      <Button
        onClick={fetchRequest}
        text={joke === initialJokeState ? 'GET A JOKE!' : 'GET ANOTHER JOKE!'}
      />
    </div>
  );
};
