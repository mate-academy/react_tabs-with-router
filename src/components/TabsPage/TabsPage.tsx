import React, { useState } from 'react';
import { Tab } from '../../types/Tab';
// eslint-disable-next-line import/no-cycle
import { tabs } from '../../App';
import { Tabs } from '../Tabs/Tabs';

export const TabsPage: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>('');
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const onTabSelected = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {selectedTabId !== ''
          ? `Selected tab is ${selectedTab.title}`
          : 'Tabs page'}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
