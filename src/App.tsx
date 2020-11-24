import React, { FC } from 'react';
import {
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: FC = () => (
  <div className="App">
    <nav className="menu">
      <span><NavLink to="/">Home</NavLink></span>
      <span><NavLink to="/tabs">Tabs</NavLink></span>
    </nav>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/tabs/:id?"
        render={({ match }) => <Tabs tabs={tabs} tabId={match.params.id} />}
      />
    </Switch>

  </div>
);

export default App;
