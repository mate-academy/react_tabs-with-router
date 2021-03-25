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
      <Route path="/tabs">
        <TabsPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch>
  </div>
);
