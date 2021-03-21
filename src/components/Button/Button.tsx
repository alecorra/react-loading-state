import React from 'react';
import { ButtonType } from '../../types';

import './Button.scss';

interface ButtonProps {
  type?: ButtonType;
  onClick(event: React.MouseEvent<HTMLElement>): Promise<void> | void;
  text: string;
  isError?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { type, onClick, text, isError } = props;

  return (
    <button
      className={`button-component ${isError ? 'button-error' : ''}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  isError: false,
};
