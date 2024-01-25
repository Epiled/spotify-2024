import { createGlobalStyle } from "styled-components"

const Fonts: React.FC = createGlobalStyle`
  @font-face {
    font-family: 'CircularSp';
    font-weight: 400;
    src: url('./fonts/CircularSp-Book.woff2') format('woff2');
  }

  @font-face {
    font-family: 'CircularSp';
    font-weight: 700;
    src: url('./fonts/CircularSp-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'CircularSp';
    font-weight: bold;
    src: url('./fonts/CircularSp-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'CircularSpTitle';
    font-weight: 700;
    src: url('./fonts/CircularSp-Book.woff2') format('woff2');
  }

  @font-face {
    font-family: 'CircularSpTitle';
    font-weight: bold;
    src: url('./fonts/CircularSp-Book.woff2') format('woff2');
  }

  @font-face {
    font-family: 'CircularSpTitle';
    font-weight: 900;
    src: url('./fonts/CircularSp-Black.woff2') format('woff2');
  }
`

export default Fonts