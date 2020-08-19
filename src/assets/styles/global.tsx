import { createGlobalStyle } from 'styled-components'

import BarlowSemiCondensedBold from '../fonts/BarlowSemiCondensedBold.ttf';
import BarlowSemiCondensedSemiBold from '../fonts/BarlowSemiCondensedSemiBold.ttf';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BarlowSemiCondensedBold';
    src: local('BarlowSemiCondensed-Bold'), local('BarlowSemiCondensedBold'),
    url(${BarlowSemiCondensedBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'BarlowSemiCondensedSemiBold';
    src: local('BarlowSemiCondensed-SemiBold'), local('BarlowSemiCondensedSemiBold'),
    url(${BarlowSemiCondensedSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  body {
    font-family: BarlowSemiCondensedBold;
    background: radial-gradient(circle, ${({ theme: { colors: { backgroundGradient } } }) => backgroundGradient.from } 0%, ${({ theme: { colors: { backgroundGradient } } }) => backgroundGradient.to } 50%);
    background-position: 0 80%;
    background-size: 100% 200%;
    background-repeat: no-repeat;
  }
`

export default GlobalStyle;