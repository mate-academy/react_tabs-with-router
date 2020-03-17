import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Tabs } from './components/TabsLink';
import { creatorTabs } from './components/CreatorTabs';


import './App.css';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/tabs" exact component={Tabs} />
      <Route path="/tabs/:tabsId" component={creatorTabs} />

    </div>
);

export default App;
