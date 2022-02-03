import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bulma';

import './App.scss';

const App = () => (
  <div className="App">
    <nav className="navbar">
      <NavLink
        className={({ isActive }) => (
          isActive ? 'navbar-item is-tab' : 'navbar-item'
        )}
        to="/home"
      >
        Home

      </NavLink>
      <NavLink
        className={({ isActive }) => (
          isActive ? 'navbar-item is-tab' : 'navbar-item'
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
