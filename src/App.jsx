import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import TabsPage from './components/TabsPage';

import './App.scss';

const App = () => (
  <div className="App">
    <header className="header">
      <NavLink
        exact
        to="/"
        activeClassName="selected"
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        activeClassName="selected"
      >
        Tabs
      </NavLink>
    </header>
    <main className="content">
      <Route exact path="/">
        <h1>Home page</h1>
      </Route>
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </main>
  </div>
);

export default App;
