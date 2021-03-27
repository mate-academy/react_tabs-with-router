import React from 'react';
import 'bulma';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { TabsPage } from './TabsPage';

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
    <Navigation />
    <Switch>
      <Route path="/" exact>
        <h1 className="title is-1">Home page</h1>
      </Route>
      <Route path="/tabs/:tabId?">
        <TabsPage tabs={tabs} />
      </Route>
    </Switch>
  </div>
);

export default App;
