import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import React from 'react';

const getLinkActive = ({ isActive }: { isActive: boolean }) => {
  return cn('navbar-item', {
    'is-active': isActive,
  });
};

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkActive}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkActive}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="tabs">
        <Route index element={<Tabs />} />
        <Route path=":tabsId" element={<Tabs />} />
      </Route>
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
  </>
);
