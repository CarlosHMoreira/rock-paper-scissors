import React from 'react';
import styled from 'styled-components';

export type Props  = {
  outline?: boolean,
  big?: boolean,
  children: React.ReactNode
}

const Button = styled.button<Props>`
  min-width: ${({ big }) => big ? '200px' : '120px' };
  padding: .7rem .7rem .5rem;
  border: 1.5px solid #fff;
  border-radius: 8px;
  background-color: ${({ outline }) => outline ? 'transparent' : '#fff' };
  font-family: BarlowSemiCondensed;
  text-transform: uppercase;
  color: ${({ outline, theme }) => outline ? '#fff' : theme.colors.neutral.darkText };

  &:hover {
    cursor: pointer;
  }
`;

export default Button;