import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Tabs from './components/Tabs/Tabs';

const App = () => (
  <>
    <nav className="ui pointing menu">
      <NavLink
        exact
        to="/"
        activeClassName="active item"
        className="item"
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        activeClassName="active item"
        className="item"
      >
        Tabs
      </NavLink>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tabs/:id?" component={TabsPage} />
    </Switch>
  </>
);

const HomePage = () => <h1>Home page</h1>;

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
const TabsPage = ({ match }) => (
  <Tabs tabs={tabs} currentId={match.params.id} />
);

export default App;
