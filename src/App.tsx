import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { Home } from './Components/Home';
import { Header } from './Components/Header';
import { Tabs } from './Components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];


const App: React.FC = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/tabs/:tabId?"
          render={({ match }) => (
            <Tabs
              tabs={tabs}
              currentTabId={match.params.tabId}
            />
          )}
        />
      </Switch>

    </main>
  </>
);

export default App;
