import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs }) => (
  <div>
    <Switch>
      {tabs.map(tab => (
        <Route
          path={`/tabs/${tab.id}`}
          key={tab.id}
        >
          {tab.content}
        </Route>
      ))}
      <Route path="/tabs">
        <h1>Please select a tab message</h1>
      </Route>
    </Switch>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};
