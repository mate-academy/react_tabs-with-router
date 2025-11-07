import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import cn from 'classnames';
import { Navigate, Route, Routes, NavLink } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

export const App: React.FC = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              cn('navbar-item', { 'is-active': isActive })
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }: { isActive: boolean }) =>
              cn('navbar-item', { 'is-active': isActive })
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to={'/'} replace />} />
      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);
