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
    --bg-header: #090909;
    --bg-input-hover: #2a2a2a;
    --bg-album: #181818;
    --bg-album-hover: #282828;
    --shadow: #0000007f;
  }
`

export default Variaveis;