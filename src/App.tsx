import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './App.scss';
import { TabsPage } from './pages/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <nav>
      <ul className="nav">
        <li>
          <NavLink
            className="nav__button"
            activeClassName="nav__button-selected"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__button"
            activeClassName="nav__button-selected"
            to="/tabs"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <h1>This is your home page.</h1>
        )}
      />
      <Route
        path="/tabs/:tabId?"
        exact
        render={() => (
          <TabsPage tabs={tabs} />
        )}
      />
    </Switch>
  </div>
);

export default App;
