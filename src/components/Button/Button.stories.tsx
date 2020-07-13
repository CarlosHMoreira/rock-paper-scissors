import React from 'react';
import Button from './index';

export default {
  title: "Button",
}

export const withText = () => (<Button>Rules</Button>);

export const withOutline = () => (<Button outline>esse tem</Button>);