import React from 'react';
import 'bulma';

import './App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import { TabsPage } from './TabsPage';

const App = () => (
  <div className="main">
    <h1>Tabs with router</h1>
    <Link to="/" className="button">Home</Link>
    <Link to="/tabs" className="button">Tabs</Link>
    <Switch>
      <Route
        path="/tabs/:tabId?"
        component={TabsPage}
      />
      <Route path="/" exact>
        <h1>Home page</h1>
      </Route>
    </Switch>

  </div>
);

export default App;
