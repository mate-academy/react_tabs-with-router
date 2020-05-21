import React from 'react';

import './App.scss';

import {
  Switch, Route,
} from 'react-router-dom';
import { HomePageTabs } from './additional/homePageTabs';
import { HomePage } from './additional/homePage';
import { TabsList } from './additional/tabsList';

const App = () => (
  <>
    <HomePageTabs />
    <Switch>
      <Route path="/tabs/:tabId?" exact component={TabsList} />
      <Route path="/" component={HomePage} />
    </Switch>

  </>

);

export default App;
