import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './NavTabs.scss';

import { TabI } from '../../api/interface';

export const NavTabs: React.FC<{tabs: TabI[]}> = ({ tabs }) => {
  const match = useRouteMatch();

  return (
    <div className="nav-tabs">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="tab-item"
        >
          <NavLink
            to={`${match.url}/${tab.id}`}
            className="tab"
            activeClassName="active-tab"
          >
            {tab.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
