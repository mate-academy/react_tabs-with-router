import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { MainNavigation } from './components/MainNavigation';
import TabsPage from './components/TabsPage';
import { tabs } from './helpers/tabs';
import './App.scss';

const App = () => (
  <div className="App">
    <MainNavigation />

    <h1>Tabs with router</h1>
    <div className="columns">
      <div className="column">

        <Switch>
          <Route
            path="/"
            exact
            component={HomePage}
          />

          <Route path="/tabs/:tabId?">
            <div className="TabsPage">
              <TabsPage tabs={tabs} />
            </div>
          </Route>

        </Switch>
      </div>
    </div>
  </div>
);

export default App;
