import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { MainNavigation } from './MainNavigation';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';

const tabs = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

export const App = () => (
  <div className="App">
    <MainNavigation />
    <Switch>
      <Route path="/tabs">
        <TabsPage tabs={tabs} />
      </Route>
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </div>
);
