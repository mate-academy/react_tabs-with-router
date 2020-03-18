import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from '../components/Header';
import { Home } from '../components/Home';
import { Tabs } from '../components/Tabs';

import './App.css';


export const App: FC = () => (
  <>
    <Header />
    <hr />

    <div className="content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tabs/:tabId?" component={Tabs} />
      </Switch>
    </div>
  </>
);
