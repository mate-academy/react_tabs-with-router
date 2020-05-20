import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';

import { Tabs } from './components/Tabs';
import { Home } from './components/Home';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="app">
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
      <Route path="/" exact component={Home} />
      <Route path="/tabs/:id?" render={({ match }) => (
        <Tabs tabs={tabs} currentTabId={match.params.id} />
      )} />
    </Switch>
  </div>
);

export default App;
