import React from 'react';
import { NavLink } from 'react-router-dom';

import { TabTypes } from '../../constants/proptypes';
import './Tab.scss';

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

Tab.propTypes = TabTypes;

export default Tab;
