import React from 'react';
import * as T from '.';

export default {
  title: "Typography",
}

export const defaultTitle = () => (<T.Title>Rock Paper and Scissor</T.Title>);

export const titleWithDifferentColor = () => (<T.Title color="#242424">Rock Paper and Scissor</T.Title>);

export const defaultText = () => (<T.Text>You picked</T.Text>);

export const textWithDifferentColor = () => (<T.Text color="tomato">You picked tomato</T.Text>);

export const textBold = () => (<T.Text bold>You picked</T.Text>);

export const textBoldWithDifferentColor = () => (<T.Text bold color="#888800">The house picked</T.Text>);
