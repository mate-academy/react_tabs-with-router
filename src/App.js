/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Home = () => <h1>Home</h1>;

export const App = () => (
  <>
    <nav>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/tabs">Tabs</NavLink>
    </nav>

    <Route path="/" exact component={Home} />
    <Route
      path="/tabs/:tabId?"
      exact
      render={({ match }) => (
        <>
          <h1>Tabs</h1>
          <Tabs
            tabs={tabs}
            match={match}
          />
        </>
      )}
    />
  </>
);
