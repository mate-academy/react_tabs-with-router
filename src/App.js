import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import TabsPage from './components/TabsPage/TabsPage';
import NavBar from './components/NavBar/NavBar';

const App = () => (
  <div className="App">
    <div className="container">
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <HomePage />
          )}
        />
        <Route
          path="/tabs/:id?"
          component={({ match }) => (
            <TabsPage match={match} tabs={tabs} />
          )}
        />
      </Switch>
    </div>
  </div>
);

const HomePage = () => <h1>Home page</h1>;

const tabs = [
  { id: 'tab-1', title: 'Tabs 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tabs 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tabs 3', content: 'Some text 3' },
];

export default App;
