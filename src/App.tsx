import React, { FC } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Home } from './components/Home/Home';
import { Tabs } from './components/Tabs/Tabs';

import './App.css';

const App: FC = () => (
  <div className="wrapper">
    <BrowserRouter>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route
        path="/tabs/:tabsId?"
        component={Tabs}
      />
    </BrowserRouter>
  </div>
);

export default App;
