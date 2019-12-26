import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import TabsPage from './TabsPage';
import './App.css';
import ErrorPath from './ErrorPath';

const App = () => (
  <div className="App">

    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="nav-link--active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tabs"
              activeClassName="nav-link--active"
            >
                TabsPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabTitle?" exact component={TabsPage} />
      <Route component={ErrorPath} />
    </Switch>
  </div>

);

const HomePage = () => <h1>Home page</h1>;

export default App;
