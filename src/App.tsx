import React, { lazy, Suspense } from 'react';
import './styles/global.css';

// Importações dos componentes principais (carregamento normal)
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import { LanguageProvider } from './contexts/LanguageContext';

// Componentes que serão carregados com lazy loading
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const TechStack = lazy(() => import('./components/TechStack'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Componente de loading
const LoadingFallback = () => <div className="loading">Carregando...</div>;

function App() {
  return (
    <LanguageProvider>
      <div className="container">
        <Header />
        <Hero />
        <About />
        
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <TechStack />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </LanguageProvider>
  );
}

export default App;

