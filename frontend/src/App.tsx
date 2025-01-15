import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Imoveis from './pages/Imoveis'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import CadastroImovel from './pages/CadastroImovel'
import { Profile } from './pages/Profile'
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AuthProvider } from './contexts/AuthContext';

const theme = createTheme({
  spacing: 8,
  palette: {
    mode: 'light',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Container>
          <Box sx={{ mt: 4 }}>
            <Box>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/imoveis" element={<Imoveis />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/cadastro-imovel" element={<CadastroImovel />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <Footer />
            </Box>
          </Box>
        </Container>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
