import React from 'react';
import { NavLink } from 'react-router-dom';

import TabContent from '../TabContent/TabContent';

import { tabs } from '../data/tabsData';


const TabsPage = () => {
  return (
    <div className="tabs__wraper">
      <h1 className="header">Tabs with router</h1>
      <ul className="tabs__nav">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`/tabs/${tab.id}`}
            className="tabs__link"
          >
            {tab.title}
          </NavLink>
        ))}
      </ul>
      <TabContent />
    </div>
  );
};

export default TabsPage;
