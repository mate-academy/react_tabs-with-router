import React from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';

import { TabsTypes } from '../../constants/proptypes';
import './Tabs.scss';

const Tabs = ({ tabs, match }) => (
  <ul className="nav nav-tabs">
    {tabs.map((tab, i) => (
      <li
        key={shortid.generate()}
        className="nav-item"
      >
        <NavLink
          to={`/tabs/tab-${i + 1}`}
          className="nav-link"
        >
          {tab.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

Tabs.propTypes = TabsTypes;

export default Tabs;
