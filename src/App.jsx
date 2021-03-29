import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const App = () => (
  <div className="App">
    <NavLink
      activeClassName="nav"
      exact
      to="/"
    >
      Home Page
    </NavLink>
    <NavLink
      activeClassName="nav"
      to="/tabs"
    >
      Tabs Page
    </NavLink>
    <Switch>
      <Route path="/tabs/:tabId?">
        <TabsPage tabs={tabs} />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <h1>Page not found</h1>
    </Switch>
  </div>
);

export default App;
