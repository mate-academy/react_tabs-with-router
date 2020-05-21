import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home';

import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <nav className="container">
        <ul className="navbar__container">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tabs/">Tabs</NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <Switch>
      <div className="container content-container">
        <Route path="/" exact component={Home} />


        <Route
          path="/tabs/:tabId?"
          render={(props) => (
            <Tabs
              tabs={tabs}
              props={props}
              currentTabId="tab-2"
            />
          )}
        />
      </div>
    </Switch>
  </div>
);

export default App;
