import React from 'react';
import { Route, NavLink} from "react-router-dom";
import { Home } from './components/Home'
import { Tabs } from './components/Tabs'
import './App.css';

const App = () => (
  <div className="app">
    <h1>Tabs with router</h1>
    <ul className="nav">
      <li><NavLink to="/" className="navlink">Home</NavLink></li>
      <li><NavLink to="/tabs" className="navlink">Tabs</NavLink></li>
    </ul>

    <Route path="/" exact component={Home} />
    <Route path="/tabs" component={Tabs} />
  </div>
);

export default App;
