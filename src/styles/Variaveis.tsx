import { createGlobalStyle } from "styled-components";

const Variaveis: React.FC = createGlobalStyle`
  :root {
    --darker: #000000;
    --lighter: #ffffff;
    --color-gray-darker-1: #121212;
    --color-gray-darker-2: #242424;
    --color-gray-darker-3: #1a1a1a;
    --color-gray-lighter-1: #b3b3b3;
    --color-gray-lighter-2: #a7a7a7;
  }
`

export default Variaveis;