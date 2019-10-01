import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import './App.css';

const App = () => (
  <div className="container">
    <nav className="menu">
      <Link className="menu-item" exact to="/">Home</Link>
      <Link className="menu-item" exact to="/tabs">Tabs</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
