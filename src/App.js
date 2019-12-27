import React from 'react';
import './App.css';
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';

const App = () => (
  <div className="App">
    <HashRouter>
      <nav>
        <ul className="main_ul">
          <li className="home">
            <NavLink className="mainButton" to="/" exact>
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink className="mainButton" to="/tabs">
              TabsPage
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs" component={TabsPage} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
