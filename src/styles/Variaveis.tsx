import { createGlobalStyle } from "styled-components";

const Variaveis: React.FC = createGlobalStyle`
  :root {
    --darker: #000000;
    --lighter: #ffffff;
    --color-gray-darker-1: #121212;
    --color-gray-darker-2: #5e1b1b;
    --color-gray-lighter-1: #b3b3b3;
    --color-gray-lighter-2: #351a1a;
  }
`

export default Variaveis;