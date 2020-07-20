import React, { FC } from 'react';
import {
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Tabs } from './components/Tabs/Tabs';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: FC = () => (
  <div className="App">
    <h1 className="hading">Tabs with router</h1>
    <nav>
      <ul className="primaryButtons">
        <li>
          <NavLink to="/" exact className="btn btn-primary">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tabs" className="btn btn-secondary">Tabs</NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/tabs/"
        render={({ match }) => <Tabs tabs={tabs} path={match.path} />}
      />
    </Switch>

  </div>
);

export default App;
