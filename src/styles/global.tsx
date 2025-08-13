import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import theme from '@/styles/theme/theme.ts';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      html, body {
        height: 100%;
        margin: ${theme.spacing.spacing0};
        background-color: ${theme.colors.backgroundDisabled};
        font-family: 'Pretendard', sans-serif;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
