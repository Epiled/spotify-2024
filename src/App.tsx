import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EstilosGlobais from './styles/EstilosGlobais'
import Home from './pages/Home'
import { BuscaProvider } from './context/BuscaContext'

const App: React.FC = () => {

  return (
    <Router>
      <BuscaProvider>
        <EstilosGlobais />

        {/* Rotas */}
        <Routes>
          <Route index path='/' element={<Home />} />

          {/* Rota de fallback */}
          <Route path='/404' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BuscaProvider>
    </Router>
  )
}

export default App

