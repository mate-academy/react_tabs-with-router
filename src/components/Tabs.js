import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

const Tabs = ({ tabs, match }) => (
  <h2>
    {tabs.map(tab => <NavLink to={`/Tabs/${tab.id}`}>{tab.title}</NavLink>)}
    <Route
      path={`${match.url}`}
      render={props => (
        <h2>
          {(tabs.find(tab => (
            tab.id === match.params.currentTabId)) || {}).content}
        </h2>
      )}
    />
  </h2>
);

Tabs.propTypes = {
  tabs: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      currentTabId: PropTypes.string,
    }),
  }).isRequired,
};

export default Tabs;
