import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainNavigation } from './components/MainNavigation';
import './App.scss';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';



const App = () => (
  <div className="App">
    <MainNavigation />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
      <Redirect from="/home" to="/" />
      <h2>Not Found</h2>
    </Switch>
  </div>
);

export default App;
