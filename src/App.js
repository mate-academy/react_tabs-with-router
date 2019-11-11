import React from 'react';
import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';

const App = () => (
  <div className="main">
    <nav className="menu">
      <NavLink className="item-menu ui button" to="/">Home</NavLink>
      <NavLink className="item-menu ui button" to="/tabs">Tabs</NavLink>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
