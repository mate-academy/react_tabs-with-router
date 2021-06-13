import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';
import { PageNotFound } from './components/PageNotFound';

import './App.scss';

const App = () => (
  <div className="App">
    <Navigation />

    <main className="App__main">
      <Switch>
        <Route
          path="/"
          exact
          component={HomePage}
        />

        <Route path="/tabs" component={Tabs} />

        <Redirect path="/home" to="/" />

        <PageNotFound />
      </Switch>
    </main>
  </div>
);

export default App;
