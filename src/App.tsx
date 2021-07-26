import React from 'react';

import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { TabsPage } from './components/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" exact>
        <h1>Home page</h1>
      </Route>
      <Route path="/tabs/:tabId?">
        <TabsPage tabs={tabs} />
      </Route>

      <h2>Not found</h2>
    </Switch>
  </div>
);

export default App;
