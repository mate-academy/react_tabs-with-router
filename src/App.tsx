import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Home } from './components/Home/Home';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const App = () => (
  <div className="container">
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tabs/:tabId?" component={Tabs} />
    </Switch>
  </div>
);

export default App;
