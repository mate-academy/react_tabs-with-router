import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

const Tabs = ({ tabs, match }) => (
  <>
    <ul className="list">
      {tabs.map(({ title, id }) => (
        <NavLink
          className="tab"
          activeClassName="tab_active"
          key={title}
          to={`${match.path}/${id}`}
          exact
        >
          {title}
        </NavLink>
      ))}
    </ul>
    <Route
      path={`${match.path}/:currentTabId`}
      render={({ match: { params } }) => (
        <section className="content">
          {(tabs.find(tab => tab.id === params.currentTabId) || {}).content}
        </section>
      )}
    />
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
};

export default Tabs;
