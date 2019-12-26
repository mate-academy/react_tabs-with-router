import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import TabsPage from './Components/TabsPage';
import HomePage from './Components/HomePage';

const App = () => (
  <div className="App">
    <ul>
      <li>
        <NavLink className="links" activeClassName="active" to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="links" activeClassName="active" to="/tabs">
          Tabs
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
