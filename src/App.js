import React from 'react';
import './App.css';
import {
  Switch, Route,
} from 'react-router-dom';

import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';

const App = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={HomePage}
    />
    <Route
      path="/tabs/:id?"
      component={TabsPage}
    />
  </Switch>
);

export default App;
