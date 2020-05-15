import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NavLinks } from './components/NavLinks';

const App = () => (
  <div className="app">
    <NavLinks />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
