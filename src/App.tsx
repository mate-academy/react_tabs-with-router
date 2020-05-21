import React from 'react';
import { Route } from 'react-router-dom';
import { Tabs } from './Tabs';
import { Nav } from './Nav';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <>
      <div className="App">
        <Nav />
      </div>
      <div className="container">
        <Route path="/" exact><h1>Home</h1></Route>
        <Route
          path="/tabs/:id?"
          render={({ match }) => (
            <>
              <h1>Tabs</h1>
              <Tabs
                currentTabId={match.params.id}
                tabs={tabs}
              />
            </>
          )}
        />
      </div>
    </>
  );
};

export default App;
