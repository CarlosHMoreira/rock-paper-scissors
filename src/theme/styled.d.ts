import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        rockGradient: {
          from: string,
          to: string,
        },
        paperGradient: {
          from: string,
          to: string,
        }
        scissorsGradient: {
          from: string,
          to: string,
        },
      },
      neutral: {
        darkText: string,
        scoreText: string,
        headerOutline: string,
      }
      backgroundGradient: {
        from: string,
        to: string,
      },
    }
  }
}