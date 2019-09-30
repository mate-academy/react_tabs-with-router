import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';
import MainNav from './components/MainNav';

const App = () => (
  <div className="App">
    <HashRouter>
      <MainNav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/tabs/:tabId?" component={TabsPage} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
