import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EstilosGlobais from './styles/EstilosGlobais'
import Home from './pages/Home'
import { BuscaProvider } from './context/BuscaContext';
import { DrawerProvider } from './context/DrawerContext';


const App: React.FC = () => {

  return (
    <Router>
      <BuscaProvider>
        <DrawerProvider>
          <EstilosGlobais />

          {/* Rotas */}
          <Routes>
            <Route index path='/' element={<Home />} />

            {/* Rota de fallback */}
            <Route path='/404' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </DrawerProvider>
      </BuscaProvider>
    </Router>
  )
}

export default App

