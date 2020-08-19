import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../src/theme/themes'
import GlobalStyle from '../src/assets/styles/global';

addDecorator(storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    { storyFn() }
  </ThemeProvider>
));