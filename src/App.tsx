import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TabsPage } from './Components/TabsPage';
import { Nav } from './Components/Nav';
import { Tab } from './helpers';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={() => <h1>Home</h1>} />
        <Route
          path="/tabs"
          render={({ match }) => <TabsPage tabId={match.params.tabId} tabs={tabs} />}
        />
        <Route component={() => <p>Not found</p>} />
      </Switch>
    </div>
  );
};

export default App;
