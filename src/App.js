import React from 'react';
import './App.css';
import {
  Route, NavLink, HashRouter, Switch,
} from 'react-router-dom';
import Tabs from './Tabs';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <HashRouter>
    <div className="App">
      <nav>
        <NavLink
          to="/"
          exact
          className="tabs__home tabs__position"
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className="tabs__home"
        >
          tabsPage
        </NavLink>
      </nav>
      <Switch>
        <Route path="*" component={ErrorPage} />
        <Route path="/" exact component={HomePage} />
        <Route
          path="/tabs/:tabId?"
          exact
          render={({ match }) => (
            <Tabs
              tabs={tabs}
              tabId={match.params.tabId}
            />
          )}
        />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
