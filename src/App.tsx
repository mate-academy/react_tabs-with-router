import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Tabs } from './components/Tabs';

import './App.css';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Somebody once told me' },
  { id: 'tab-2', title: 'Tab 2', content: 'The world is gonna roll me' },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'I ain\'t the sharpest tool in the shed',
  },
];

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="red darken-1"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tabs"
              activeClassName="red darken-1"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Route exact path="/" render={() => <h2>Home</h2>} />
        <Route
          path="/tabs/:id?"
          render={({ match }) => (
            <>
              <h2>Tabs</h2>
              <Tabs
                tabs={tabs}
                currentTabId={match.params.id}
              />
            </>
          )}
        />
      </div>
    </>
  );
}
