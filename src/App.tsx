import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { MainNavigation } from './components/MainNavigation/MainNavigation';

import 'bulma';
import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <MainNavigation />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
      <Redirect to="/" from="/home" />
    </Switch>
  </div>
);

export default App;
