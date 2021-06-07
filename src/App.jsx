import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import 'bulma';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage/HomePage';
import { Tabs } from './components/Tabs';
import { NotFoundPage } from './components/NotFoundPage';

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
  <>
    <Header />
    <div className="App">
      <Switch>
        <Route path="/tabs/:tabId?">
          <Tabs tabs={tabs} />
        </Route>
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </>
);

export default App;
