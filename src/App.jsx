import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';

import './App.scss';

const App = () => {
  const tabs = [
    {
      id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
    },
    {
      id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
    },
    {
      id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
    },
  ];

  return (
    (
      <div className="App">
        <h1>Tabs with router</h1>

        <nav>
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/tabs/:id?">Tabs</NavLink></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home" component={Home} />
          <Route
            path="/tabs"
            render={() => <Tabs tabs={tabs} />}
          />
        </Switch>
      </div>
    )
  );
};

export default App;
