import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
} from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <BrowserRouter>
    <nav className="nav orange">
      <div className="nav-wrapper container">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tabs"
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <Route path="/" exact component={HomePage} />
    <Route
      path="/tabs/:id?"
      render={({ match }) => <Tabs tabs={tabs} id={match.params.id} />}
    />
  </BrowserRouter>
);

export default App;
