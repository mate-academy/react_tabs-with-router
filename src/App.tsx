import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './HomePage';
import { Navigation } from './Navigation';
import { NotFoundPage } from './NotFoundPage';
import { TabsPage } from './TabsPage';

const App: React.FC = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tabs/:tabId?" component={TabsPage} />
          <Redirect path="/home" to="/" />
          <NotFoundPage />
        </Switch>
      </div>
    </>
  )
};

export default App;
