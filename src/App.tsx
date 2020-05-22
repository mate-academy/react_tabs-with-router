import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Tabs from './Tabs';

import './App.css';

const tabs = [
  {
    id: 'london',
    title: 'London',
    content: 'Paris is the capital of England.',
  },
  {
    id: 'paris',
    title: 'Paris',
    content: 'Paris is the capital of France.',
  },
  {
    id: 'tokyo',
    title: 'Tokyo',
    content: 'Tokyo is the capital of Japan',
  },
];

const HomePage = () => (
  <h3 className="header">Home</h3>
);

const App = () => (
  <>
    <nav>
      <ul className="nav">
        <li>
          <NavLink to="/" exact className="nav_link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tabs" className="nav_link">
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>
    <Route path="/" exact component={HomePage} />
    <Route
      path="/tabs/:tabId?"
      render={({ match }) => <Tabs tabs={tabs} tabId={match.params.tabId} />}
    />
  </>
);

export default App;
