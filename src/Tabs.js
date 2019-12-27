import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, Switch } from 'react-router-dom';

const Tabs = ({ tabs, match }) => (
  <section>
    <ul>
      {tabs.map(({ title, id }) => (
        <NavLink
          to={`${match.path}/${id}`}
          key={id}
          className="tabs-item"
          activeClassName="tabs-item_active"
          exact
        >
          {title}
        </NavLink>
      ))}
    </ul>
    <Switch>
      <Route
        path={`${match.path}/:currentTabId`}
        render={({ match: { params } }) => (
          <p className="content">
            {(tabs.find(tab => tab.id === params.currentTabId) || {}).content}
          </p>
        )}
      />
    </Switch>
  </section>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,

  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
};

export default Tabs;
