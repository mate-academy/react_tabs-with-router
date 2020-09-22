import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import { Tabs } from './Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Home = () => <h1>Home</h1>;

const App = () => (

  <div className="App">
    <ul className="nav">
      <li>
        <NavLink
          className="nav__item"
          to="/"
          exact
          activeClassName="isActiveNav"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav__item"
          to="/tabs"
          activeClassName="isActiveNav"
        >
          Tabs
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        exact
        path="/tabs/:tabId?"
        render={({ match }) => (
          <Tabs
            match={match}
            tabs={tabs}
          />
        )}
      />
    </Switch>
  </div>
);

export default App;
