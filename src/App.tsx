import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Tabs } from './Tabs/Tabs';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/tabs">Tabs Page</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <h2>Home</h2>
        </Route>
        <Route
          path="/tabs/:id?"
          render={({ match }) => (
            <Tabs tabs={tabs} currentTab={match.params.id} />
          )}
        />
      </Switch>
    </header>
  </div>
);

export default App;
