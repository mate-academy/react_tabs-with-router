import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

export const App: React.FC = () => {
  const location = useLocation();

  // Adiciona a classe is-active ao elemento pai conforme a URL atual
  const isHomeActive = location.pathname === '/' || location.pathname === '';
  const isTabsActive = location.pathname.startsWith('/tabs');

  return (
    <>
      {/* Nota: o HTML raiz deve ter <html class="has-navbar-fixed-top"> para Bulma se necessário */}
      <nav className="navbar is-light is-fixed-top is-mobile has-shadow" data-cy="Nav">
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
            <Route path="/" element={<HomePage />} />

            {/* Redirect /home -> / */}
            <Route path="home" element={<Navigate to="/" replace />} />

            {/* Rotas aninhadas para /tabs e /tabs/:tabId */}
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

const NotFound: React.FC = () => (
  <>
    <h1 className="title">Page not found</h1>
    <div className="block">The page you are looking for does not exist.</div>
  </>
);
