import React, { FC } from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Home } from './components/Home/Home';
import { Tabs } from './components/Tabs/Tabs';

import './App.css';

const App: FC = () => (
  <div className="wrapper">
    <HashRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/tabs/:tabsId?"
          component={Tabs}
        />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
