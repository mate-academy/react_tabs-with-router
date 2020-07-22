import React from 'react';
import { NavLink } from 'react-router-dom';

interface TabProps {
  title: string;
  tabId: string;
}

export const Tab: React.FC<TabProps> = ({ tabId, title }) => (
  <NavLink
    to={`/tabs/${tabId}`}
    className="link"
  >
    {title}
  </NavLink>
);
