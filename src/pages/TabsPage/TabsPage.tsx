import React from 'react';
import { Outlet } from 'react-router-dom';

import { Tabs } from '../../components/Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};
