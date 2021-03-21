import React from 'react';

import './Loading.scss';

export const Loading: React.FunctionComponent = () => {
  return (
    <div className="loading">
      <div className="loading__loader" />
    </div>
  );
};
