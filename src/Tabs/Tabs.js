import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs }) => (
  <div className="nav nav--secondary">
    {tabs.map(tab => (
      <NavLink
        key={tab.id}
        to={`/tabs/${tab.id}`}
        className="nav__link"
        activeClassName="is-active"
      >
        {tab.title}
      </NavLink>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
