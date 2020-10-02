import React from 'react';
import { Link, Route } from 'react-router-dom';

import { TabsPage } from './TabsPage';

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
    <Link to="/">go to Home </Link>
    <Link to="/tabs">go to Tabs </Link>

    <Route path="/" exact>
      <h1>Home page</h1>
    </Route>

    <Route path="/tabs/:tabId?">
      <TabsPage tabs={tabs} />
    </Route>
  </div>
);

export default App;
