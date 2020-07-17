import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  tab: TabInterface;
};

export const Tab: React.FC<Props> = ({ tab }) => (
  <NavLink
    className="tab__link"
    to={`/tabs/${tab.id}`}
  >
    {tab.title}
  </NavLink>
);
