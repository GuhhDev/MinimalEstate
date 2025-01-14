import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Imoveis from './pages/Imoveis'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import CadastroImovel from './pages/CadastroImovel'

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imoveis" element={<Imoveis />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro-imovel" element={<CadastroImovel />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App

