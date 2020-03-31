import React, { FC } from 'react';
import 'bulma/css/bulma.css';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { Nav } from './components/Nav/Nav';

const App: FC = () => (
  <div className="app">
    <Nav />

    <hr />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
