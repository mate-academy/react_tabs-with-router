import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route
          path="/tabs/:id?"
          render={({ match }) => (
            <Tabs tabs={tabs} tabId={match.params.tabId} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
