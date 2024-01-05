/* eslint-disable max-len */
import React from 'react';
import {
  Route, Routes, Navigate, NavLink,
} from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsPage } from './components/TabsPage/TabsPage';

interface NavLinkProps {
  isPending: boolean
  isActive: boolean
  isTransitioning: boolean
}

const getLinkClass = (prop: NavLinkProps) => classNames(
  'navbar-item',
  { 'is-active': prop.isActive },
);

export const App: React.FC = () => {
  return (
    <div className="app">
      <nav className="navbar is-light is-fixed-top is-mobile has-shadow" data-cy="Nav">
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getLinkClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={(
            <div className="section">
              <h1 className="title">Home page</h1>
            </div>
          )}
        />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route
          path="*"
          element={(
            <div className="section">
              <h1 className="title">Page not found</h1>
            </div>
          )}
        />
      </Routes>
    </div>
  );
};
