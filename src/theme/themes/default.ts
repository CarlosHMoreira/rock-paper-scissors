import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: {
      rockGradient: {
        from: 'hsl(349, 71%, 52%)',
        to: 'hsl(349, 70%, 56%)',
      },
      paperGradient: {
        from: 'hsl(230, 89%, 62%)',
        to: 'hsl(230, 89%, 65%)',
      },
      scissorsGradient: {
        from: 'hsl(39, 89%, 49%)',
        to: 'hsl(40, 84%, 53%)',
      },
    },
    neutral: {
      darkText: 'hsl(229, 25%, 31%)',
      scoreText: 'hsl(229, 64%, 46%)',
      headerOutline: 'hsl(217, 16%, 45%)',
    },
    backgroundGradient: {
      from: 'hsl(214, 47%, 23%)',
      to: 'hsl(237, 49%, 15%)',
    },
  }
};
