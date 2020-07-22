import React from 'react';
import { Tab } from './Tab';

export interface Tabs {
  id: string;
  title: string;
  content: string;
}

interface TabsProps {
  tabs: Tabs[];
  tabId: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, tabId }) => {
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1>Tabs</h1>
      {
        tabs.map(tab => (
          <Tab
            tabId={tab.id}
            title={tab.title}
            key={tab.id}
          />
        ))
      }
      <p>{currentTab ? currentTab.content : ''}</p>
    </>
  );
};
