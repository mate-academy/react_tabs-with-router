import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, NavLink,
} from 'react-router-dom';
import TabsPage from './components/TabsPage/TabsPage';
import HomePage from './components/HomePage/HomePage';

const App = () => (
  <div className="app">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <nav className="nav">
        <NavLink to="/" exact>
          Домашня сторінка
        </NavLink>
        <NavLink to="/tabs">
          Сторінка табів
        </NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs/:currentTabId?" component={TabsPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
