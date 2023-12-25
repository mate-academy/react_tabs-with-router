import React, { useState } from 'react';
import { Tab } from '../../types/Tab';
import { Tabs } from '../Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string | null>(null);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={data => setSelectedTabId(data?.id)}
        />
      </div>
    </div>
  );
};