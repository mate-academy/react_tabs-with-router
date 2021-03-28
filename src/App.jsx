import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Navigation } from './components/Navigation'
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';
import 'bulma';
import './App.scss'

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <Route path="/tabs">
        <Tabs
          tabs={tabs}
        />
      </Route>
      <Route path="/" exact component={HomePage}/>
      <Redirect path="/home" to="/"/>
      <p>Page not found</p>

    </Switch>
  </div>
);

export default App;
