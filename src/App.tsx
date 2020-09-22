import React from 'react';

import './App.scss';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>

    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink
            className="nav__item"
            to="/"
            exact
          >
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className="nav__item"
            to="/tabs/"
          >
            <span>Tabs</span>
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs/:tabId?"
        render={({ match }) => (
          <TabsPage match={match} tabs={tabs} />
        )}
      />
    </Switch>
  </div>
);

export default App;
