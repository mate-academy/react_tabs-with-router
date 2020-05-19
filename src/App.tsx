import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Tabs from './Tabs';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {

  return (
    <>
      <div className="App">
        <h1 className="display-3">Tabs with router</h1>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tabs">Tabs</NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => (
            <h2 className="display-4">Home Page</h2>
          )}
        />
        <Route
          path="/tabs/:tabId?"
          render={({match}) => (
            <Tabs tabs={tabs} currentTabId={match.params.tabId}/>
          )}
        />
      </div>
    </>
  );
};

export default App;
