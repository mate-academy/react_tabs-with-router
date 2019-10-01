import React from 'react';
import './App.css';

import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabPage from './components/TabPage/TabPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="app">
    <BrowserRouter>
      <nav>
        <ul className="app__list">
          <li className="app__item">
            <NavLink
              to="/home"
              className="app__link"
            >
              Home Page
            </NavLink>
          </li>
          <li className="app__item">
            <NavLink
              to="/tabs"
              className="app__link"
            >
              Tabs Page
            </NavLink>
          </li>
        </ul>
      </nav>
      <Route path="/home" exact component={HomePage} />
      <Route
        path="/tabs/:id?"
        render={({ match }) => (
          <TabPage tabs={tabs} match={match.params.id} />
        )}
      />
    </BrowserRouter>
  </div>
);

export default App;
