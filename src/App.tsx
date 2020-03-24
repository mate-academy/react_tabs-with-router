import React, { FC } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import './App.css';


const App: FC = () => (
  <div className="App">
    <NavLink
      to="/"
      exact
      className="link"
      activeClassName="link--active"
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className="link"
      activeClassName="link--active"
    >
      Tabs
    </NavLink>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:activeTab?" exact component={TabsPage} />
    </Switch>
  </div>
);

export default App;
