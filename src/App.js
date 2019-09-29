import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './App.scss';
import TabsPage from './components/TabsPage/TabsPage';

const App = () => (
  <div className="App">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tabs"
                className="nav-link"
              >
                Tabs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route
          path="/tabs/:id?"
          render={routeProps => (
            <TabsPage match={routeProps.match} tabs={tabs} />
          )}
        />
      </Switch>
    </div>
  </div>
);

const HomePage = () => <h1>Home page</h1>;

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export default App;
