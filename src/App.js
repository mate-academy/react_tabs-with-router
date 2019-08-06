import React from 'react';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import './App.css';
import TabsPage from './components/TabsPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <nav className="nav-bar">
          <NavLink
            className="hlink"
            to="/"
            activeClassName="active"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="tlink"
            to="/TabsData"
            activeClassName="active"
            exact
          >
            Tabs
          </NavLink>
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route path="/TabsData/:tabId?" component={TabsPage} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
