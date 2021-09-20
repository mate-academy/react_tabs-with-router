import React from 'react';

import './App.scss';
import { Header } from './components/Header';
import { Switch, Route, Redirect } from 'react-router';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/tabs/:tabId?">
          <TabsPage />
        </Route>

        <Route path="/" exact>
          <HomePage />
        </Route>

        <Redirect path="/home" to="/" />

        <NotFoundPage />
      </Switch>
      
    </div>
  );
};

export default App;
