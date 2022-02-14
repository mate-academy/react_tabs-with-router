// import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink
          className="nav-link"
          activeClassName="active"
          to="/"
          exact
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active"
          to="/tabs"
        >
          Tabs
        </NavLink>
      </div>
    </nav>
    <Switch>
      <Route
        path="/"
        exact
      >
        <HomePage />
      </Route>
      <Route
        path="/tabs/:tabId?"
        exact
      >
        <TabsPage tabs={tabs} />
      </Route>
    </Switch>
  </div>
);

export default App;
