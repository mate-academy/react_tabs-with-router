import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, match }) => (
  <div>
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id}>
          <NavLink
            className="tabs__link"
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>
    {match.params.tabId && (
      <h1>
        {tabs.find(tab => tab.id === match.params.tabId).content}
      </h1>
    )}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  match: PropTypes.objectOf,
};

Tabs.defaultProps = {
  match: {},
};
