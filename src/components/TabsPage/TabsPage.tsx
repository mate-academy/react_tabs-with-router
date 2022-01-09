import React from 'react';
import {
  NavLink, Routes, Route,
} from 'react-router-dom';
import { TabContent } from '../TabContent/TabContent';

import './TabsPage.scss';

export const TabsPage: React.FC = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <div className="tabs">
      <div className="tabs__list">
        {tabs.map(tab => (
          <NavLink
            className={({ isActive }) => (isActive
              ? 'tabs__list--item-a'
              : 'tabs__list--item'
            )}
            key={tab.id}
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<TabContent tabs={tabs} />} />
        <Route path="/:tabId" element={<TabContent tabs={tabs} />} />
      </Routes>
    </div>
  );
};
