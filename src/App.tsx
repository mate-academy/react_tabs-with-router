import React from 'react';
import {
  NavLink,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';

import classNames from 'classnames';
import { TabsPage } from './TabsPage';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const App: React.FC = () => {
  const getLinkClass = (isActive: boolean) => {
    return classNames(
      'navbar-item',
      { 'is-active': isActive },
    );
  };

  return (
    <div>
      <section
        className="
          navbar
          navbar-start
          is-fixed-top
          has-background-light
        "
        data-cy="nav"
      >
        <article className="navbar-menu">
          <NavLink
            to="/"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            Tabs
          </NavLink>
        </article>
      </section>

      <section className="section">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
    </div>
  );
};
