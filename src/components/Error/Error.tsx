import React from 'react';
import { Button } from '../Button/Button';
import { initialJokeState, JokeType, Status } from '../../types';

import './Error.scss';

interface ErrorProps {
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
  setJoke: React.Dispatch<React.SetStateAction<JokeType>>;
}

export const Error: React.FunctionComponent<ErrorProps> = (props: ErrorProps) => {
  const { setStatus, setJoke } = props;

  const resetInitialState = (): void => {
    setStatus(Status.INITIAL);
    setJoke(initialJokeState);
  };

  return (
    <div className="error">
      <div className="error__message">
        <h1>There was a problem with the fetch request, please retry.</h1>
      </div>

      <Button text="RETRY" onClick={(): void => resetInitialState()} isError={true} />
    </div>
  );
};
