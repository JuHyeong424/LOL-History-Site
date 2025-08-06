import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      * {
        box-sizing: border-box;
      }

      body {
        font-family: 'Pretendard', sans-serif;
      }
    `}
  />
);

export default GlobalStyle;
