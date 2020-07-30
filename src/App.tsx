import React from 'react';
import {
  Route,
  NavLink,
} from 'react-router-dom';

import './App.css';

import { Tabs } from './modules/Tabs';

export const Home = () => (<h2>Home Page</h2>);

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <div className="general">
      <NavLink
        to="/"
        exact
        className="general-item"
        activeClassName="general__active"
      >
        Home
      </NavLink>

      <NavLink
        to="/tabs/"
        exact
        className="general-item"
        activeClassName="general__active"
      >
        Tabs
      </NavLink>
    </div>

    <Route exact path="/" component={Home} />
    <Route exact path="/tabs/:id?" component={Tabs} />
  </div>
);

export default App;
