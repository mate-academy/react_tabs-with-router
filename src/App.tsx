import React, { FC } from 'react';
import {
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';

const App: FC = () => (
  <div className="app">
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link"
            activeClassName="nav__link--active"
            exact
          >
             Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/tabs"
            className="nav__link"
            activeClassName="nav__link--active"
          >
              TabsPage
          </NavLink>
        </li>
      </ul>
    </nav>

    <hr />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
