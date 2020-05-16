import React from 'react';
import {
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import './App.css';

import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <>
      <nav>
        <ul className="list">
          <li className="item">
            <NavLink
              activeClassName="activeLink"
              className="linka"
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              activeClassName="activeLink"
              className="linka"
              to="/tabs"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/tabs/:id?"
          render={() => (
            <Tabs tabs={tabs} />
          )}
        />
      </Switch>
    </>
  );
};

export default App;
