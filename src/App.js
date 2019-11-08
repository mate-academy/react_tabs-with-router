import React from 'react';
import './App.css';
import {
  NavLink, Route, Switch,
} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import TabList from './components/tabList/TabList';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <nav className="ui pointing menu">
      <NavLink
        exact
        to="/"
        activeClassName="active item"
        className="item"
      >
        Home Page
      </NavLink>
      <NavLink
        exact
        to="/tabs"
        activeClassName="active item"
        className="item"
      >
        Tabs Page
      </NavLink>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/tabs/:tabId?"
        render={({ match }) => (
          <TabList match={match} tabs={tabs} />
        )}
      />
    </Switch>
  </div>
);

export default App;
