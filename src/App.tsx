import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <header className="header">
      <nav className="header__nav nav">
        <ul>
          <li className="header__item">
            <NavLink
              exact
              to="/"
              activeClassName="header__item_active"
              className="header__item"
            >
              Home
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              to="/tabs/"
              activeClassName="header__item_active"
              className="header__item"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route exact path="/">
        <h1>Home page</h1>
      </Route>
      <Route path="/tabs/:tabId?" component={Tabs} />
    </Switch>
  </div>
);

export default App;
