import React from 'react';

import './App.scss';

import { Switch, Route } from 'react-router-dom';

import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';
import { MainNavigation } from './components/MainNavigation';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <MainNavigation />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tabs/:tabId?">
        <TabsPage tabs={tabs} />
      </Route>
      <p>
        Page not found
      </p>
    </Switch>
  </div>
);

export default App;
