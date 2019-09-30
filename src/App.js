import React from 'react';
import {
  HashRouter, Route, Switch, NavLink,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import './App.css';

const App = () => (
  <HashRouter>
    <div className="app">
      <nav className="nav nav-pills justify-content-center">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-link" to="/tabs">Tabs</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tabs/:tabId?" component={TabsPage} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
