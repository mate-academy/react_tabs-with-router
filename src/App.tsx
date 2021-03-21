import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import './App.scss';
import 'bulma';

const App = () => (
  <div className="App">
    <div className="content is-normal">
      <h1 className="header">React tabs with router</h1>
      <Navigation />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs/:tabId?" component={TabsPage} />

        <Redirect path="/home" to="/" />
        <Redirect to="/tabs" />
      </Switch>
    </div>

  </div>
);

export default App;
