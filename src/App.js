import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import HomePage from './component/HomePage/HomePage.js';
import TabsPage from './component/TabsPage/TabsPage.js';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="container">
    <nav>
      <ul className="nav">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav-link">
            Home page
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/tabs"
            className="nav-link"
          >
            Tabs page
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs/:id?"
        render={({ match }) =>
          <TabsPage
            match={match} tabs={tabs} />
        }
      />
    </Switch>

  </div>
);

export default App;
