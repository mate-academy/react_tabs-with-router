import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import TabsPage from './TabsPage';
import HomePage from './HomePage';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <nav className="main-menu">
        <NavLink to="/tabs-with-router/" exact>HomePage</NavLink>
        <NavLink to="/tabs-with-router/tabs">TabsPage</NavLink>
      </nav>
      <Route path="/tabs-with-router/" exact component={HomePage} />
      <Route path="/tabs-with-router/tabs/:tabId?" component={TabsPage} />
    </div>
  </BrowserRouter>
);

export default App;
