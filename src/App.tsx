import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import NavigationList from './components/NavigationList/NavigationList';

const App = () => (
  <div className="App">
    <NavigationList />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" exact component={TabsPage} />
    </Switch>
  </div>
);

export default App;
