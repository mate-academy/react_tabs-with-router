import React from 'react';
import { NavLink } from 'react-router-dom';
import { TabsPage } from './TabsPage';

export const Tabs = () => {
  const tabs = [
    {
      id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
    },
    {
      id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
    },
    {
      id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
    },
  ];

  return (
    <div className="Tabs">
      <h1>Tabs</h1>
      <div className="Tabs-List">
        {tabs.map(tab => (
          <NavLink
            to={`/tabs/${tab.id}`}
            key={tab.id}
            activeClassName="Active-Tab"
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <TabsPage tabs={tabs} />
    </div>
  );
};
