import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Container from '@/components/ui/Container';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import Properties from 'pages/Properties';
import PropertyDetails from 'pages/PropertyDetails';
import PropertyListing from 'pages/PropertyListing';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './components/ErrorBoundary';
import { theme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
      <Header />
        <Container>
          <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/properties/anunciar" element={<PropertyListing />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </Suspense>
        </Container>
      <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
};
