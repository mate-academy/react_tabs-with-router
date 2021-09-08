import React from 'react';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import './App.scss';
import { TabsPage } from './TabsPage/TabsPage';
import { Button } from './styled';

const App = () => (
  <HashRouter>
    <div className="App">
      <div>
        <Link to="/">
          <Button type="button">
            Home
          </Button>
        </Link>

        <Link to="/tabs">
          {}
          <Button type="button">
            Tabs
          </Button>
        </Link>
      </div>
      <Switch>
        <Route path="/tabs/:tabId?" component={TabsPage} />
        <Route path="/" exact>
          <h1>Home Page</h1>
        </Route>
        <Redirect path="/home" to="/" />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
