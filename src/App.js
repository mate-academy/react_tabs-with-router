import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, NavLink, HashRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Tabs from './Tabs';
import './App.css';

const App = () => (
  <HashRouter>
    <div className="App">
      <NavLink
        to="/"
        exact
        className="nav-item"
        activeClassName="nav-item_active"
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        exact
        className="nav-item"
        activeClassName="nav-item_active"
      >
        Tabs
      </NavLink>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs" component={TabsPage} />
      </Switch>
    </div>
  </HashRouter>
);

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

const TabsPage = ({ match }) => (
  <Tabs tabs={tabs} match={match} />
);

TabsPage.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
};

export default App;
