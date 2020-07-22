import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLinks } from './NavLinks';
import { TabsList } from './TabsList';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <NavLinks />
      </form>
    </nav>
    <Switch>
      <Route
        path="/"
        exact
        render={() => <p>HOME</p>}
      />
      <Route
        path="/tabs/:id?"
        render={
          ({ match }) => <TabsList list={tabs} id={match.params.id} />
        }
      />
    </Switch>
  </div>
);

export default App;
