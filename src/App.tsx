import React, { FC } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Tabs from './components/Tabs';
import { Nav } from './components/Nav';

const App: FC = () => (
  <Router>
    <Nav />
    <Switch>
      <Route
        path="/"
        render={() => <h1>Homepage</h1>}
        exact
      />
      <Route path="/tabs/:tabsId?" component={Tabs} exact />
    </Switch>
  </Router>
);

export default App;
