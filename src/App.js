import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from './components/Tabs/Tabs';

const App = () => (
  <BrowserRouter>
    <h1>Tabs with router</h1>
    <nav>
      <NavLink
        to="/"
        exact
        className="link"
        activeClassName="link-active"
      >
        HomePage
      </NavLink>
      <NavLink
        to="/tabs"
        className="link"
        activeClassName="link-active"
      >
        TabsPage
      </NavLink>
    </nav>
    <Switch>
      <Route path="/" exact render={HomePage} />
      <Route path="/tabs" exact render={TabsPage} />
    </Switch>
  </BrowserRouter>
);

const HomePage = () => <h1>Home page</h1>;

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <Tabs tabs={tabs} currentTabId="tab-1" tabsMatch={match} />
);

TabsPage.defaultProps = {
  match: {},
};

TabsPage.propTypes = {
  match: PropTypes.objectOf,
};
export default App;
