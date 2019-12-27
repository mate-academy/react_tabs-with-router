import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';
import TabContent from './Tab';

const Tabs = ({ tabs, match }) => (
  <>
    <div>
      {tabs.map(tab => (
        <NavLink
          className="button"
          key={tab.id}
          to={`${match.path}/${tab.id}`}
        >
          {tab.title}
        </NavLink>
      ))}
    </div>
    <Switch>
      <Route
        path={`${match.path}/:tabId`}
        render={({ match: match2 }) => (
          <TabContent tab={tabs
            .find(tab => tab.id === match2.params.tabId) || {}}
          />
        )}
      />
    </Switch>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tabs;
