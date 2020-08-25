import React from 'react';
import 'jest-styled-components'

import { renderWithTheme } from '../../../.jest/themed-renderer';

import Button from '.';

describe('Button', () => {
  test('it should match the default button snapshot', () => {
    const component = (<Button>Some content</Button>);
    const snapshot = renderWithTheme(component);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  test('it should match the big button snapshot', () => {
    const component = (<Button big >Some content</Button>);
    const snapshot = renderWithTheme(component);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  test('it should match the outline button snapshot', () => {
    const component = (<Button outline >Some content</Button>);
    const snapshot = renderWithTheme(component);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  test('it should match the big and outline button snapshot', () => {
    const component = (<Button big outline >Some content</Button>);
    const snapshot = renderWithTheme(component);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});