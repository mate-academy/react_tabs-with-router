import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage/HomePage';
import Tabs from './components/Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <h1 className="head">Tabs with router</h1>

    <HashRouter>
      <ul className="list">
        <li className="list__item">
          <NavLink to="/" className="list__link" activeClassName="list__link--active">
            Home Page
          </NavLink>
        </li>

        <li className="list__item">
          <NavLink to="/tabs" className="list__link" activeClassName="list__link--active">
            Tabs
          </NavLink>
        </li>
      </ul>

      <Route path="/" exact component={HomePage} />

      <Route
        path="/tabs/:id?"
        render={({ match }) => (
          <Tabs tabs={tabs} currentId={match.params.id} />
        )}
      />
    </HashRouter>
  </div>
);

export default App;
