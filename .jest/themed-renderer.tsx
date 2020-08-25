import React from 'react';
import { create } from 'react-test-renderer';

import Theme from '../src/theme';

export const renderWithTheme = (component: React.ReactNode) => create(<Theme>{component}</Theme>);