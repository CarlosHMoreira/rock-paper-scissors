import React from 'react';
import 'jest-styled-components'

import { renderWithTheme } from '../../../.jest/themed-renderer';

import * as T from '.';

describe('Typography', () => {
  test('it should match the default title snapshot', () => {
    const component = (<T.Title>Rock paper scissors</T.Title>);
    const snapshot = renderWithTheme(component);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  test('it should match Title with different color snapshot', () => {
    const component = (<T.Title color="#fff" >Rock paper scissors</T.Title>);
    const snapshot = renderWithTheme(component);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  test('it should match Text default snapshot', () => {
    const component = (<T.Text>Rock paper scissors</T.Text>);
    const snapshot = renderWithTheme(component);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  test('it should match Text with different color snapshot', () => {
    const component = (<T.Text color="#fff">Rock paper scissors</T.Text>);
    const snapshot = renderWithTheme(component);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  test('it should match Text with different color and bold snapshot', () => {
    const component = (<T.Text bold color="#fff">Rock paper scissors</T.Text>);
    const snapshot = renderWithTheme(component);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});