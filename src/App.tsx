import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <NavLink
      to="/"
      className="app__navlink"
      activeClassName="app__navlink--active"
      exact
    >
      Home page
    </NavLink>
    <NavLink
      to="/tabs"
      className="app__navlink"
      activeClassName="app__navlink--active"
    >
      Tabs page
    </NavLink>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} className="app__tabsPage" />
    </Switch>

  </div>
);

export default App;
