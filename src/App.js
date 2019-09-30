import React from 'react';
import './App.css';
import {
  HashRouter, NavLink, Route, Switch,
} from 'react-router-dom';

import TabsPage from './Components/TabsPage/TabsPage';
import HomePage from './Components/HomePage/HomePage';

const App = () => (
  <HashRouter>
    <div className="App">
      <nav className="navigation">
        <NavLink className="btn btn-primary nav-item" exact to="/">
          HomePage
        </NavLink>
        <NavLink className="btn btn-primary" to="/tabs">
          TabsPage
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tabs/:tabId?" component={TabsPage} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
