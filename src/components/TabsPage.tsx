import React from 'react';
import { NavLink } from 'react-router-dom';
import { ITabs } from '../Interfaces';

const TabsPage: React.FC<{ tabs: ITabs[] }> = ({ tabs }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <NavLink
          className="tab-links"
          to={`/tabs/${tab.id}`}
          key={tab.title}
          activeClassName="active"
        >
          {tab.title}
        </NavLink>
      ))}
    </div>
  );
};

export default TabsPage;
