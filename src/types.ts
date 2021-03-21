export type JokeType = {
  id?: number;
  type?: string;
  setup?: string;
  punchline?: string;
};

export const initialJokeState: JokeType = {
  id: undefined,
  type: undefined,
  setup: undefined,
  punchline: undefined,
};

export enum Status {
  INITIAL = '',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}
