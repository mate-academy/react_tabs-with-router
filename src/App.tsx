import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
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
        path="/tabs/:id?"
        render={({ match }) => (
          <Tabs
            tabs={tabs}
            tabId={match.params.id}
          />
        )}
      />
    </Switch>
  </div>
);
