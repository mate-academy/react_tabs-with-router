import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { TabsPage } from './TabsPage';
import { Navigation } from './Navigation';

const App = () => (
  <HashRouter>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/tabs/:tabId" component={TabsPage} />
        <Route path="/" exact>
          <h1>Home Page</h1>
        </Route>

        <h1>not found</h1>
      </Switch>
    </div>
  </HashRouter>
);

export default App;
