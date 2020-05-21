import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './App.css';
import TabsPage from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <>
    <nav className="nav header__nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className="nav__link"
            activeClassName="is-active"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            activeClassName="is-active"
            to="/tabs"
            exact
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

    <div className="wrap">
      <h1 className="app__title">Tabs with router</h1>
      <Switch>
        <Route path="/tabs">
          <TabsPage tabs={tabs} />
        </Route>
        <Route path="/" component={() => <h1 className="title">HomePage</h1>} />
      </Switch>
    </div>
  </>
);

export default App;
