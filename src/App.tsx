import React from 'react';
import {
  Route,
  // Link,
  Switch,
  NavLink,
  // RouteProps,
} from 'react-router-dom';
import './App.css';
import { TabType } from './Components/interfaces/TabInterface';
import { Tabs } from './Components/Tabs/Tabs';
import { tabsList } from './Components/api/api';

const tabs: TabType[] = tabsList;

export const App = () => (
  <div className="App">
    <NavLink className="btn btn-link" to="/">Home</NavLink>
    <NavLink className="btn btn-link" to="/tabs">Tabs</NavLink>
    <Switch>
      <Route path="/" exact render={() => <h1>Tabs with router</h1>} />
      <Route
        path="/tabs"
        render={({ match }) => (
          <Tabs
            path={match.path}
            tabs={tabs}
            currentTabId="tab-1"
          />
        )}
      />
    </Switch>
  </div>
);
