import React from 'react';
import { NavLink } from 'react-router-dom';

import TabContent from '../TabContent/TabContent';

import './TabsPage.css';

import { tabs } from '../data/tabsData';


const TabsPage = () => {
  return (
    <div className="tabs__wraper">
      <h1 className="header">Tabs with router</h1>
      <ul className="tabs__nav">
        {tabs.map(tab => (
          <li className="tabs__item">
            <NavLink
              key={tab.id}
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <TabContent />
    </div>
  );
};

export default TabsPage;
