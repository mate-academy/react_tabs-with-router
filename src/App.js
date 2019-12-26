import React from 'react';
import './App.css';
import {
  HashRouter,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Tabs from './Tabs';

const App = () => (
  <HashRouter>
    <div className="App">
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            exact
            className="nav__link"
            activeClassName="nav__link-active"
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tabs"
            className="nav__link"
            activeClassName="nav__link-active"
          >
            Tabs Page
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs" component={TabsPage} />
      </Switch>
    </div>
  </HashRouter>
);

const HomePage = () => (
  <div className="home">
    <h1>Home</h1>
    {/* eslint-disable-next-line max-len */}
    <img alt="home" src="https://s3.amazonaws.com/tinycards/image/fa524f51a84e81e2ae63e0dbeba83f57" />
  </div>
);

const TabsPage = () => (
  <div className="tabs">
    <h1>Tabs</h1>
    <Tabs />
  </div>
);

export default App;
