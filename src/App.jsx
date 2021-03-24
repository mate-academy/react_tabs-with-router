import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

import './App.scss';

export const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route
        path="/tabs/:tabId?"
        component={TabsPage}
      />

      <Route
        path="/"
        exact
        component={HomePage}
      />

      <Redirect to="/" />
    </Switch>
  </div>
);
