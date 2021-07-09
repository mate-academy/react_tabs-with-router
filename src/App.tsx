import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation' 
import Tabs from './components/Tabs';
import './App.scss';

const App = () => (
  <div className="App">
    <h3>Tabs with router</h3>
    <Navigation />
    <Switch>
      <Route
        path="/tabs/:tabId?"
        component={Tabs}
      />
      <Route path="/" exact>
        <h1>Home page</h1>
      </Route>

      <Redirect path="/home" to="/" />
    </Switch>
  </div>
);

export default App;
