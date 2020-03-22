import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <h1>Tabs with router</h1>
      <NavLink to="/" className="app__navlink" exact>Home page</NavLink>
      <NavLink to="/tabs" className="app__navlink">Tabs page</NavLink>

      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} className="app__tabsPage" />

    </div>
  </BrowserRouter>
);

export default App;
