import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { Tab } from './components/Tab';

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
    <Tab />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tabs/:tabId?">
        <Tabs tabs={tabs} />
      </Route>
      <p>
        Page not found
      </p>
    </Switch>
  </div>
);

export default App;
