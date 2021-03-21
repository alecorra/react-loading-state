import React from 'react';

import './JokeLine.scss';

interface JokeLineProps {
  property: string;
  value?: string | number;
}

export const JokeLine: React.FunctionComponent<JokeLineProps> = (props: JokeLineProps) => {
  const { property, value } = props;

  return (
    <div className="joke-line">
      <p className="joke-line__property">{property}</p>
      <p className="joke-line__value">{value}</p>
    </div>
  );
};

JokeLine.defaultProps = {
  value: undefined,
};
