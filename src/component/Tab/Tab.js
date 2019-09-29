import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tab = ({ title, index }) => (
  <li className="nav-item">
    <NavLink
      to={`/tabs/${index}`}
      className="nav-link"
    >
      {title}
    </NavLink>
  </li>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
}

export default Tab;
