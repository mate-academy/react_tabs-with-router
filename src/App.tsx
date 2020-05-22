import React from 'react';
import {
  BrowserRouter, Switch, Route, NavLink,
} from 'react-router-dom';
import TabsPage from './TabsPage';
import HomePage from './HomePage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <NavLink to="/" exact>
            <li>Home</li>
          </NavLink>
          <NavLink to="/tabs">
            <li>Tabs</li>
          </NavLink>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/tabs/:tabId?"
          exact
          render={({ match }) => (
            <TabsPage tabId={match.params.tabId} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};


export default App;
