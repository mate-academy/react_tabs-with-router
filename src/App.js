import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';

const App = () => (
  <BrowserRouter basename="/react_tabs-with-router">
    <div className="App">
      <nav>
        <ul className="main-nav">
          <li className="main-nav__item">
            <NavLink
              className="main-nav__link" 
              activeClassName="main-nav__link--active" 
              to="/" 
              exact
            >
              HomePage
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink 
              className="main-nav__link" 
              activeClassName="main-nav__link--active" 
              to="/tabs" 
              exact
            >
              TabsPage
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs/:tabId?" exact component={TabsPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
