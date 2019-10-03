import React from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import TabsPage from './components/TabsPage/TabsPage';
import HomePage from './components/HomePage/HomePage';

const App = () => (
  <div className="App">
    <nav className="nav-list">
      <NavLink exact to="/"><h1>Home page</h1></NavLink>
      <NavLink to="/tabs/"><h2>Tabs</h2></NavLink>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tabs/:tabsId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
