import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { MainNavigation } from './components/MainNavigation';
import 'bulma';

const App: React.FC = () => (
  <div className="container">
    <MainNavigation />
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/tabs/:tabId?' component={TabsPage} />
      <Redirect path='/home' to='/' />
      <p><NotFoundPage /></p>
    </Switch>
  </div>
);

export default App;
