import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface TabProps {
  title: string;
  tabId: string;
}

export const Tab: FC<TabProps> = ({ tabId, title }) => (
  <div id="myTabContent" className="tab-content">
    <div className="tab-pane fade show active" id="home">
      <NavLink
        to={`/tabs/${tabId}`}
        className="nav-link"
      >
        {title}
      </NavLink>
    </div>
  </div>
);
