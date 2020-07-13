import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../src/theme/themes'

addDecorator(storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>);