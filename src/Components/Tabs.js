import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, withRouter } from 'react-router-dom';

const Tabs = ({ tabs, match }) => (
  <div>
    <ul>
      {tabs.map(tab => (
        <li key={tab.id}>
          <NavLink to={`${match.path}/${tab.id}`}>
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>

    <Route
      path={`${match.path}/:tabText`}
      render={({ match: { params } }) => (
        <p>
          {(tabs.find(tab => tab.id === params.tabText) || {}).content}
        </p>
      )}
    />
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({ path: PropTypes.string }),
}.isRequired;

export default withRouter(Tabs);
