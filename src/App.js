import React from 'react';

import {
  HashRouter, Route, Switch, NavLink,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import './App.css';

const App = () => (
  <HashRouter>
    <div className="app">
      <nav>
        <NavLink className="nav-link" to="/tabs">Tabs</NavLink>
        <NavLink className="nav-link" exact to="/">Home</NavLink>
      </nav>
      <Switch>
        <Route path="/tabs/:tabId?" component={TabsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
