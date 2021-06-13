import React from 'react';
import { NavLink } from 'react-router-dom';

import { tabsProps } from './tabsProps';

export const TabsList = ({ tabs }) => (
  <nav>
    <ul className="tabs__list">
      {tabs.map(tab => (
        <li key={tab.id} className="tabs__item">
          <NavLink
            to={`/tabs/${tab.id}`}
            className="tabs__link"
            activeClassName="tabs__link--active"
          >
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

TabsList.propTypes = {
  tabs: tabsProps,
};

TabsList.defaultProps = {
  tabs: [],
};
