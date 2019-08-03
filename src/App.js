import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import './App.css';
import Tabs from './components/Tabs';
import Home from './components/Home';

const App = () => (
  <BrowserRouter>
    <div className="App">

      <nav>
        <ul className="navbar">
          <li><NavLink className="navlink" to="/" exact>Home</NavLink></li>
          <li><NavLink className="navlink" to="/tabs/">Tabs</NavLink></li>
        </ul>
      </nav>

      <Route
        path="/"
        exact
        component={Home}
      />

      <Route
        path="/tabs/:tabId?"
        component={Tabs}
      />

    </div>
  </BrowserRouter>
);

export default App;
