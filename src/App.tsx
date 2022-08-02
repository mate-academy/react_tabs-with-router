import React from 'react';
import {
  NavLink,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';

import classNames from 'classnames';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { TabsPage } from './TabsPage';

export const App: React.FC = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'is-active' : '';
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
            className={param => classNames(
              'navbar-item',
              getLinkClass(param),
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={param => classNames(
              'navbar-item',
              getLinkClass(param),
            )}
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
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </section>
    </div>
  );
};
