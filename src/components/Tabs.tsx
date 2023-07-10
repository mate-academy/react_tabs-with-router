import React, { useState } from 'react';
import { tabs } from '../api/api';
import { TabItem } from './TabItem';
import { Tab } from '../types/Tab';

export const Tabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              key={tab.id}
              tab={tab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
