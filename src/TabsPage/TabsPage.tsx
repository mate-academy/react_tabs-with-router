import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../Tabs/Tabs';
import { Tab } from '../types/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>
      <div>
        <Tabs
          tabs={tabs}
          selectedTabId={tabId}
        />
      </div>
    </div>
  );
};
