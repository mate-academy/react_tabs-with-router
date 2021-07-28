import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

import './App.scss';

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
    <MainNavigation />

    <Switch>
      <Route path="/tabs/:tabId?">
        <TabsPage tabs={tabs} />
      </Route>

      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
);

export default App;
