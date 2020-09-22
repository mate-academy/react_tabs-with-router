import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="app">
    <h1>Tabs with router</h1>
    <nav className="app__nav">
      <ul className="app__list">
        <li>
          <NavLink
            to="/"
            exact
            className="app__link"
            activeClassName="app__link app__link--active"
          >
            Home page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tabs"
            className="app__link"
            activeClassName="app__link app__link--active"
          >
            Tabs page
          </NavLink>
        </li>
      </ul>
    </nav>

    <Route path="/" exact component={HomePage} />
    <Route
      path="/tabs"
      render={() => <TabsPage tabs={tabs} />}
    />
  </div>
);

export default App;
