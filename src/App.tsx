import React from 'react';
import {
  Route,
  Switch,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import { Home, Tabs } from './components/Tabs';
import './App.css';

const App = () => (
  <HashRouter>
    <div className="App">
      <h1>Tabs with router</h1>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/tabs" exact activeClassName="active">Tabs</NavLink>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tabs" component={Tabs} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
