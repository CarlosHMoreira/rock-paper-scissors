import React from 'react';
import Button from './index';

export default {
  title: "Button",
}

export const withText = () => (<Button>Play Again</Button>);

export const withBig = () => (<Button big>Play Again</Button>);

export const withOutline = () => (<Button outline>Rules</Button>);

export const withBigAndOutline = () => (<Button big outline>Rules</Button>);
