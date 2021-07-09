import React from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import logo from './images/svg-2.svg';

import './App.scss';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

export const App = () => (
  <div className="App">
    <header className="header header--theme_light header--size_l">
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="nav">
        <div className="nav__list">
          <NavLink
            to="/"
            exact
            className="nav__item"
            activeClassName="is-active"
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className="nav__item"
            activeClassName="is-active"
          >
            Tabs
          </NavLink>
        </div>
      </nav>
    </header>
    <section>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs/:tabsId?">
          <TabsPage tabs={tabs} />
        </Route>
        <Redirect path="/home" to="/" />
      </Switch>
    </section>
  </div>
);
