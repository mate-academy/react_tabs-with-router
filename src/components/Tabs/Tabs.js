import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, Switch } from 'react-router-dom';

const Tabs = ({ tabs, match }) => (
  <>
    <ul className="tabs-list">
      {tabs.map(({ title, id }) => (
        <NavLink
          to={`${match.path}/${id}`}
          key={id}
          className="tabs-item"
          activeClassName="tabs-item--active"
          exact
        >
          { title }
        </NavLink>
      ))}
    </ul>
    <Switch>
      {tabs.map(({ content, id }) => (
        <Route
          path={`${match.url}/${id}`}
          key={id}
          render={() => (
            <p>{content}</p>
          )}
        />
      ))}
    </Switch>
  </>
);

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,

  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
};
