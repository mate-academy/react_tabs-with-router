import './App.scss';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const App = () => (
  <div className="App container">
    <NavLink
      to="/"
      className="button"
    >
      Home
    </NavLink>
    <NavLink
      to="tabs"
      className="button"
    >
      Tabs
    </NavLink>
    <Outlet />
  </div>
);

export default App;
