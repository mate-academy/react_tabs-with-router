import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tabs from './Tabs';

const Main = ({ tabs }) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route
      path="/tabs/:tabId?"
      render={({ match }) => (
        <Tabs
          tabs={tabs}
          activeTabId={match.params.tabId}
        />
      )}
    />
  </Switch>
);

Main.propTypes = {
  tabs: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
