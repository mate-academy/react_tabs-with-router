import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <nav>
      <ul className="main-nav">
        <li className="main-nav__item">
          <NavLink
            className="main-nav__link"
            activeClassName="main-nav__link--active"
            to="/"
            exact
          >
            HomePage
            </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            className="main-nav__link"
            activeClassName="main-nav__link--active"
            to="/tabs"
            exact
          >
            TabsPage
            </NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs/:tabId?" 
        exact 
        render={({ match }) => (
          <TabsPage match={match} tabs={tabs} />
        )}
      />
    </Switch>
  </div>
);

export default App;
