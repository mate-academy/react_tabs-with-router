import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, withRouter } from 'react-router-dom';

const Tabs = ({ tabs, match }) => (
  <section className="tabs">
    <ul className="tabs__links">
      {tabs.map(tab => (
        <li key={tab.id}>
          <NavLink
            className="tabs__link"
            activeClassName="tabs__link--active"
            to={`${match.path}/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>

    <Route
      path={`${match.path}/:currentTabId`}
      render={({ match: { params } }) => (
        <p>
          {(tabs.find(tab => tab.id === params.currentTabId) || {}).content}
        </p>
      )}
    />
  </section>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape(
    { path: PropTypes.string }
  ).isRequired,
};

export default withRouter(Tabs);
