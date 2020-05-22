import React from 'react';

import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import './App.css';
import Tabs from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>

    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/tabs">Tabs</NavLink></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact>
        <h2>Home</h2>
      </Route>
      <Route
        path="/tabs/:id?"
        render={({ match }) => (
          <Tabs tabs={tabs} currentTabId={match.params.id} />
        )}
      />
    </Switch>
  </div>
);

export default App;
