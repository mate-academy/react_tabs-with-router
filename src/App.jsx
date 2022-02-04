import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bulma';

import './App.scss';
import classNames from 'classnames';

const App = () => (
  <div className="App">
    <nav className="navbar">
      <NavLink
        className={isActive => classNames(
          'navbar-item', { 'is-tab': isActive },
        )}
        to="/home"
      >
        Home

      </NavLink>
      <NavLink
        className={isActive => classNames(
          'navbar-item', { 'is-tab': isActive },
        )}
        to="/tabs"
      >
        Tabs

      </NavLink>
    </nav>
    <Outlet />
  </div>
);

export default App;
