/* eslint-disable import/no-cycle */
/* eslint-disable object-curly-newline */
import React from 'react';
import './App.scss';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              exact
              to="/"
              className="nav__link"
              activeClassName="nav__link--selected"
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/tabs/"
              className="nav__link"
              activeClassName="nav__link--selected"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <main className="main">
      <Switch>
        <Route exact path="/" render={() => <h1>Home page</h1>} />
        <Route path="/tabs/:tabId?" component={Tabs} />
      </Switch>
    </main>
  </div>
);

export default App;
