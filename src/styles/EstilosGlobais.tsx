import Fonts from "./Fonts";
import ResetCSS from "./ResetCSS";
import Variaveis from "./Variaveis";

const EstilosGlobais: React.FC = () => {
  return <>
    <Fonts />
    <Variaveis />
    <ResetCSS />
  </>;
}

export default EstilosGlobais;