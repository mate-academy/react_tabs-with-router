import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import './App.scss';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <div className="Navigation">
      <NavLink to="/home" activeClassName="Active">Home</NavLink>
      <NavLink to="/tabs" activeClassName="Active">Tabs</NavLink>
    </div>

    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/tabs" component={Tabs} />
      <Redirect exact from="/" to="/home" />
      <p>Page is not found</p>
    </Switch>
  </div>
);

export default App;
