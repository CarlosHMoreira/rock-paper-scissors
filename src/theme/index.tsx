import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { defaultTheme } from './themes';

type Props = {
  theme?: DefaultTheme,
  children: React.ReactChild
}

const Theme = ({ children, theme = defaultTheme }: Props) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;