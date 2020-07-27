import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Home } from './components/Home';
import Tabs from './components/Tabs';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

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
    <Route path="/" exact component={Home} />
    <Route
      path="/tabs/:tabId?"
      render={({ match }) => <Tabs tabs={tabs} tabId={match.params.tabId} />}
    />
  </>
);

export default App;
