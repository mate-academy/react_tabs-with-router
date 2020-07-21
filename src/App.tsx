import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Tabs } from './components/Tabs/Tabs';
import './App.css';

const HomePage = () => <h1>Home page</h1>;

const App = () => (
  <div className="App">
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tabs">
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={Tabs} />
    </Switch>
  </div>
);

export default App;
