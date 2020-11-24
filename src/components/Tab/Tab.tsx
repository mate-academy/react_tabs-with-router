import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tab.scss';

interface TabProps {
  title: string;
  tabId: string;
}

export const Tab: React.FC<TabProps> = ({ tabId, title }) => (
  <div>
      <NavLink
        to={`/tabs/${tabId}`}
        className="nav__link"
      >
        {title}
      </NavLink>
  </div>
);
