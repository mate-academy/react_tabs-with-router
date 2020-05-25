import React from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Tabs } from './components/Tabs/Tabs';

import './App.css';

const tabs = [
   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
 ];

export const App = () => (
  <HashRouter>
    <h1>Tabs with Router</h1>

    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tabs">
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tabs/:tabId?"
        render={({ match }) => (<Tabs tabs={tabs} tabId={match.params.tabId} />)} />
    </Switch>

  </HashRouter>
);
