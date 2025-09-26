import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './Home';
import TabsPage from './TabsPage';
import NotFound from './NotFound';
import './App.scss';

export const App: React.FC = () => {
  return (
    <>
      {/* Lembrete: <html class="has-navbar-fixed-top"> deve existir no index.html */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar-item ${isActive ? 'is-active' : ''}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                `navbar-item ${isActive ? 'is-active' : ''}`
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
