import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

// ✅ MOVIDO PARA CIMA (antes do uso, conforme ESLint exige)
const NotFound: React.FC = () => (
  <>
    <h1 className="title">Page not found</h1>
    <div className="block">The page you are looking for does not exist.</div>
  </>
);

export const App: React.FC = () => {
  const location = useLocation();

  // Determina qual link está ativo
  const isHomeActive = location.pathname === '/' || location.pathname === '';
  const isTabsActive = location.pathname.startsWith('/tabs');

  return (
    <>
      {/* Também requer <html class="has-navbar-fixed-top"> no index.html */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className={`navbar-item ${isHomeActive ? 'is-active' : ''}`}>
              <Link to="/">Home</Link>
            </div>
            <div className={`navbar-item ${isTabsActive ? 'is-active' : ''}`}>
              <Link to="/tabs">Tabs</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<HomePage />} />

            {/* Redirecionamento de /home para / */}
            <Route path="home" element={<Navigate to="/" replace />} />

            {/* Roteamento aninhado para Tabs */}
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            {/* Página não encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
