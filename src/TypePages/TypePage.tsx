import React from 'react';
import { Tabs } from '../components/Tabs/Tabs';
import { TabsContent } from '../components/TabsContent/TabsContent';
import { useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <Tabs />
      <TabsContent content={selectedTab?.content} />
    </div>
  );
};
