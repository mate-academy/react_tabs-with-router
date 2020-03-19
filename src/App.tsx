import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.scss';
import { Home } from './components/home/Home';
import { Tabs } from './components/tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="container-sm">
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" exact className="nav__link" activeClassName="active-main">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/tabs" className="nav__link" activeClassName="active-main">
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>
    <hr />
    <Route path="/" exact component={Home} />
    <Route
      path="/tabs/:tabId?"
      render={(props) => (
        <Tabs tabs={tabs} props={props} />
      )}
    />
  </div>
);

export default App;
