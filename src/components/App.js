import React from 'react';
import '../App.css';
import { NavLink, Route } from 'react-router-dom';

import Tabs from './Tabs';

const App = () => (
  <>
    <header className="header">
      <nav className="nav">
        <NavLink
          activeClassName="nav-link--selected"
          exact
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          isActive={() => window.location.href.includes('/tabs')}
          activeClassName="nav-link--selected"
          to="/tabs/title-1"
        >
          Tabs
        </NavLink>
      </nav>
    </header>

    <Route exact path="/" render={() => <h1>Home</h1>} />

    <Route
      path="/tabs/:title?"
      render={({ match }) => (

        <Tabs match={match}>
          <Tabs.Tab title="title 1">
            <p>Hello</p>
          </Tabs.Tab>

          <Tabs.Tab title="title 3">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Tabs.Tab>

        </Tabs>
      )}
    />
  </>
);

export default App;
