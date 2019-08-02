import React from 'react';
import './App.css';
import {
  Route, NavLink,
} from 'react-router-dom';
import TabsPage from './TabsPage';

const HomePage = () => (
  <h1> Home Page</h1>
);

const App = () => (

  <div className="App">
    <nav>
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/tabs" className="link">Tabs</NavLink>
    </nav>
    <Route path="/" exact component={HomePage} />
    <Route path="/tabs/:tabId?" component={TabsPage} />
  </div>
);

export default App;
