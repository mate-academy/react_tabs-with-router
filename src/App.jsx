import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from './components/Navigation';

import { TabsPage } from './components/TabsPage';

const App = () => (
  <div className="App">
    <Navigation />

    <Switch>
      <Route path="/" exact>
        <h1 className="m-4">Home page</h1>
      </Route>
      <Route path="/tabs/:tabId?" component={TabsPage} />
      <Route path="/about">
        <h1 className="m-4">Something about someone</h1>
      </Route>

      <h2>No such page</h2>
    </Switch>
  </div>
);

export default App;
