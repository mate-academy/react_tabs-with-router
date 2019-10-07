import React from 'react';
import './App.css';

import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import NavBar from './components/NavBar/NavBar';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="app">
    <HashRouter>
      <NavBar />

      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />

        <Route
          path="/tabs/:id?"
          render={({ match }) => (
            <TabsPage
              tabs={tabs}
              id={match.params.id}
            />
          )}
        />

      </Switch>
    </HashRouter>
  </div>
);

export default App;
