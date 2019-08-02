import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, NavLink,
} from 'react-router-dom';
import Tabs from './Tabs';
import HomePage from './HomePage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <BrowserRouter>
    <div className="App">
      <nav>
        <NavLink
          to="/"
          exact
          className="tabs__home"
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className="tabs__page"
        >
          tabsPage
        </NavLink>
      </nav>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs/:tabId?"
        render={({ match }) => (
          <Tabs
            tabs={tabs}
            tabId={match.params.tabId}
          />
        )}
      />
    </div>
  </BrowserRouter>
);

export default App;
