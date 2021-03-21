import React from 'react';
import { JokeType } from '../../types';
import { JokeLine } from '../JokeLine/JokeLine';

import './Joke.scss';

interface JokeProps {
  joke: JokeType;
}

export const Joke: React.FunctionComponent<JokeProps> = (props: JokeProps) => {
  const { joke } = props;
  return (
    <div className="joke-container">
      <JokeLine property="id" value={joke.id} />
      <JokeLine property="type" value={joke.type} />
      <JokeLine property="setup" value={joke.setup} />
      <JokeLine property="punchline" value={joke.punchline} />
    </div>
  );
};
