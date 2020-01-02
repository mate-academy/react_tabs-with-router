import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';

const App = () => (
  <div className="App">
    <nav>
      <ul>
        <li className="list">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/tabs" activeClassName="active">
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>

  </div>
);

export default App;
