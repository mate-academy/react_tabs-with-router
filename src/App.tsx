import React from 'react';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Tabs } from './Tabs';
import { Tab } from './interfaces';
import { Home } from './Home';

import './App.css';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <BrowserRouter>
    <div className="App">

      <h1>Tabs with router</h1>
      <nav>
        <ul className="app__list">
          <li className="app__list-item"><NavLink to="/" exact>Home</NavLink></li>
          <li className="app__list-item"><NavLink to="/tabs" exact>Tabs</NavLink></li>
        </ul>
      </nav>


      <Route exact path="/" component={() => (<Home />)} />
      <Route
        path="/tabs"
        component={() => (
          <>
            <Tabs
              tabs={tabs}
              currentTabId="tab-2"
              componentURL="/tabs/"
            />
          </>
        )}
      />

    </div>
  </BrowserRouter>
);

export default App;
