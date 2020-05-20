import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Tabs from './Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <header className="app__header">
      <NavLink
        to="/"
        className="app__link"
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className="app__link"
      >
        Tabs
      </NavLink>
    </header>
    <Route path="/" exact component={Home} />
    <Route
      path="/tabs/:id?"
      exact
      render={() => (
        <Tabs tabs={tabs} />
      )}
    />
  </div>
);

export default App;
