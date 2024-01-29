import { createContext, useContext, useState } from "react";

interface BuscaContextProps {
  termoBusca: string
  setTermoBusca: React.Dispatch<React.SetStateAction<string>>
}

interface BuscaProviderProps {
  children: React.ReactNode;
}

const BuscaContext = createContext<BuscaContextProps | undefined>(undefined);

const BuscaProvider: React.FC<BuscaProviderProps> = ({children}) => {
  const [termoBusca, setTermoBusca] = useState('');
  
  const values = {
    termoBusca, 
    setTermoBusca
  }

  return (
    <BuscaContext.Provider value={values}>
      {children}
    </BuscaContext.Provider>
  )
}

const useBusca = () => {
  const context = useContext(BuscaContext);
  if(!context) {
    throw new Error('useBuscaContext deve ser usado dentro de um BuscaProvider')
  }
  return context
}

export { BuscaProvider, useBusca }
