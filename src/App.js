import React from 'react';
import './App.css';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';
import Tabs from './Tabs';
import HomePage from './HomePage';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div className="ui secondary vertical pointing menu">
        <NavLink to="/" exact activeClassName="active" className="item">
          HOME
        </NavLink>
        <NavLink to="/tabs" activeClassName="active" className="item">
          TABS
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs/:currentTabId?" component={Tabs} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
