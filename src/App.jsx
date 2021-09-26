import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';
import Navigation from './Navigation';
import './App.scss';

const App = () => (
  <div
    className="App"
  >
    <Navigation />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
