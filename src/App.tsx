import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { RedirectHome } from './pages/RedirectHome';

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');
  }, []);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return classNames('navbar-item', { 'is-active': isActive });
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => {
                return classNames('navbar-item', { 'is-active': isActive });
              }}
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
            <Route path="/home" element={<RedirectHome />} />
            <Route path="tabs">
              <Route index element={<Tabs />} />
              <Route path=":tabId" element={<Tabs />} />
            </Route>

            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
