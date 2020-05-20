import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar';

import { TabsPage } from './components/pages/TabsPage';
import { HomePage } from './components/pages/HomePage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={TabsPage} path="/tabs/:tabId?" />
        </Switch>
      </div>
    </>
  );
};


export default App;
