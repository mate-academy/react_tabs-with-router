import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TabsPage } from './components/TabsPage/TabsPage';
import { MainNavigation } from './components/MainNavigation/MainNavigation';

import 'bulma';
import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <MainNavigation />
    <Switch>
      <Route path="/tabs/:tabId?" component={TabsPage} />
      <Redirect to="/" from="/home" />
    </Switch>
  </div>
);

export default App;
