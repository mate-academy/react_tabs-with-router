import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import React from 'react';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { Tabs } from './Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  return (
    <>
      <nav
        data-cy="nav"
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => classNames('navbar-item', {
                'has-background-grey-lighter': isActive,
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => classNames('navbar-item', {
                'has-background-grey-lighter': isActive,
              })}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={(
            <div className="section">
              <h1 className="title">Home page</h1>
            </div>
          )}
        />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route
          path="/tabs"
        >
          <Route
            index
            element={(
              <Tabs tabs={tabs} />
            )}
          />
          <Route path=":tabId" element={<Tabs tabs={tabs} />} />
        </Route>

        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Routes>
    </>
  );
};
