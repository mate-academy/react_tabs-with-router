import React from 'react';

import {
  Switch,
  NavLink,
  Route,
} from 'react-router-dom';

import './App.css';
import { Tabs } from './Tabs';
import { Home } from './Home';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <>
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/tabs/:id?">Tabs</NavLink>
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/tabs/:id?" render={({ match }) => <Tabs list={tabs} curId={match.params.id} />} />
    </Switch>
  </>
);

export default App;
