import React, { FC } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Tabs from './components/Tabs';
import { Nav } from './components/Nav';

const App: FC = () => (
  <>
    <Nav />
    <Switch>
      <Route
        path="/"
        render={() => <h1>Homepage</h1>}
        exact
      />
      <Route path="/tabs/:tabsId?" component={Tabs} exact />
    </Switch>
  </>
);

export default App;
