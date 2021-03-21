import React from 'react';
import { NavLink } from 'react-router-dom';
import { TabType } from '../types';
import '../App.scss';

export const Tab: React.FC<TabType> = ({ tab }) => {
  return (
    <NavLink
      to={`/tabs/${tab.id}`}
      className="navbar-item is-tab"
      activeClassName="is-active"
    >
      {tab.title}
    </NavLink>
  );
};
