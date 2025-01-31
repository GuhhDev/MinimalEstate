import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import ErrorBoundary from './components/ErrorBoundary';
import DefaultLayout from './layouts/DefaultLayout';

// Lazy loading das páginas
const Home = React.lazy(() => import('./pages/Home'));
const Properties = React.lazy(() => import('./pages/Properties'));
const PropertyDetails = React.lazy(() => import('./pages/PropertyDetails'));
const PropertyListing = React.lazy(() => import('./pages/PropertyListing'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/properties/anunciar" element={<PropertyListing />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </DefaultLayout>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
