import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import DefaultLayout from '@/layouts/DefaultLayout';

// Lazy loading das páginas
const Home = lazy(() => import('@/pages/Home'));
const Properties = lazy(() => import('@/pages/Properties'));
const PropertyDetails = lazy(() => import('@/pages/PropertyDetails'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/imoveis" element={<Properties />} />
          <Route path="/imoveis/:id" element={<PropertyDetails />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
