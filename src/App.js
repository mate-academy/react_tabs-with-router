import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, NavLink,
} from 'react-router-dom';
import TabsPage from './TabsPage';

const HomePage = () => (
  <div>
    Hello
  </div>
);

const App = () => (
  <BrowserRouter>
    <div className="App">
      <nav>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/tabs">tabsPage</NavLink>
      </nav>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </div>
  </BrowserRouter>
);

export default App;
