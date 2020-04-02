import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Tabs } from '../Tabs';
import { Home } from '../Home';
import 'bootswatch/dist/spacelab/bootstrap.min.css';
import './App.css';

const App: FC = () => (
  <div className="App">
    <Route
      path="/:x?/:y?/:z?"
      component={Home}
    />
    <Switch>
      <Route
        exact
        path="/tabs/:tabId?"
        component={Tabs}
      />
    </Switch>
  </div>
);

export default App;
