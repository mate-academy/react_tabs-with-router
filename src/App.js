import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';

const App = () => (
  <>
    <NavLink to="/" exact className="linkGo">
    go to HomePage
    </NavLink>
    <NavLink to="/tabs/" className="linkGo">
    go to TabsPage
    </NavLink>
    <Switch>
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs/:id?" component={TabsPage} />
      </div>
    </Switch>
  </>
);

export default App;
