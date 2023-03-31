import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { FC } from 'react';
import cn from 'classnames';
import {
  Routes,
  Route,
  // Link,
  Navigate,
  NavLink,
} from 'react-router-dom';
import { Tabs } from './Tabs';

export const App: FC = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => (
              cn(
                'navbar-item',
                { 'is-active': isActive },
              )
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => (
              cn(
                'navbar-item',
                { 'is-active': isActive },
              )
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="title">Home page</h1>
            }
          />

          <Route
            path="/home"
            element={
              <Navigate to="/" />
            }
          />

          <Route
            path="tabs/*"
            element={<Tabs />}
          />

          <Route
            path="*"
            element={
              <h1 className="title">Page not found</h1>
            }
          />
        </Routes>

        {/* <div className="tabs is-boxed">
          <ul>
            <li data-cy="Tab" className="is-active">
              <a href="#/">Tab 1</a>
            </li>
            <li data-cy="Tab">
              <a href="#/">Tab 2</a>
            </li>
            <li data-cy="Tab">
              <a href="#/">Tab 3</a>
            </li>
          </ul>
        </div> */}

        {/* <div className="block" data-cy="TabContent">
          Please select a tab
        </div> */}
      </div>
    </div>
  </>
);
