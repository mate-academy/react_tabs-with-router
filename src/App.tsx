import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <HashRouter>
    <div>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
            >
              Home
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/tabs"
              exact
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
    <div className="container">
      <Switch>
        <Route path="/tabs">
          <TabsPage tabs={tabs} />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </HashRouter>

);

export default App;
