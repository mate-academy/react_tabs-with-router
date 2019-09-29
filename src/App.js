import React from 'react';

import {
  HashRouter,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="app">
    <HashRouter>
      <nav className="nav-underline">
        <NavLink exact className="home-title link" to="/">
          <h1>Home page</h1>
        </NavLink>
        <NavLink className="link" to="/tabs">
          <h1>Tabs page</h1>
        </NavLink>
      </nav>

      <Switch>
        <Route
          path="/tabs"
          render={({ match }) => (
            <TabsPage
              tabs={tabs}
              match={match}
            />
          )}
        />
        <Route
          path="/"
          render={() => (
            <HomePage />
          )}
        />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
