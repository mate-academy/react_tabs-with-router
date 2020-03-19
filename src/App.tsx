import React, { FC } from 'react';
import './App.css';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage/TabsPage';
import { HomePage } from './components/HomePage/HomePage';

const App: FC = () => (

  <div className="app">
    <nav className="nav">
      <NavLink
        to="/"
        exact
        className="link"
        activeClassName="link-active"
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className="link"
        activeClassName="link-active"
      >
        Tabs
      </NavLink>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
