import React, { ReactChild } from 'react';

type Props  = {
  outline?: boolean,
  children: ReactChild
}

const Button = ({ children }: Props) => (
  <button>
    { children }
  </button>
);

export default Button;