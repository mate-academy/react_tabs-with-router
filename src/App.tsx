import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Tabs from './Tabs';
import Home from './Home';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <>
    <div className="app">
      <nav>
        <ul className="nav__list">
          <li>
            <NavLink
              to="/"
              exact
              className="nav__link"
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tabs"
              className="nav__link"
            >
              Tabs Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/tabs/:tabId?"
        render={({ match }) => <Tabs tabs={tabs} tabId={match.params.tabId} />}
      />
    </Switch>

  </>
);

export default App;
