import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import './App.scss';
import { Home } from './components/Home';
import { TabsPage } from './components/TabsPage';

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <div className="Navigation">
      <NavLink exact to="/" activeClassName="Active">Home</NavLink>
      <NavLink to="/tabs" activeClassName="Active">TabsPage</NavLink>
    </div>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
      <Redirect exact from="/home" to="/" />
      <p>Page is not found</p>
    </Switch>
  </div>
);

export default App;
