import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { TabsList } from './TabsList';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <div className="App">
      <h1>Tabs with router</h1>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <NavLink className="btn btn-outline-success" to="/" exact>Home</NavLink>
          <NavLink className="btn btn-outline-success" to="/tabs/:id?">Tabs</NavLink>
        </form>
      </nav>
      <Switch>
        <Route
          path="/tabs/:id?"
          render={
            ({ match }) => <TabsList list={tabs} id={match.params.id} />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
