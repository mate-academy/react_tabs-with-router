import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  NavLink,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomePage from './HomePage';
import TabsPage from './TabsPage';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <img
            src="/react_tabs-with-router/logo.png"
            height="60"
            className="d-inline-block align-top"
            alt="React Logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/" exact>/ Home Page /</NavLink>
          <NavLink className="nav-link" to="/tabs">/ Tabs Page /</NavLink>
        </Nav>
      </Navbar>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </div>
  </BrowserRouter>
);

export default App;
