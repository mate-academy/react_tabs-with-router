import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Tabs } from '../Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const [selectedTab, setSelectedTab] = useState<Tab | null>(tabs[0]);

  const changeTab = (tabId: string) => {
    const currentTab: Tab | null = tabs.find(tab => tab.id === tabId) || null;

    setSelectedTab(currentTab);
  };

  useEffect(() => {
    changeTab(tabId);
  }, [tabId])

  const selectedTabNumber: number = tabId ? +tabId.split('-').slice(-1) : tabs.length + 1;

  return (
    <>
      {selectedTabNumber <= tabs.length ? (
        <h1>{`Selected tab is ${selectedTabNumber}`}</h1>
      ) : (
        <h1>Choose your tab</h1>
      )}
      
      <Tabs
        selectedTab={selectedTab}
        tabs={tabs}
      />
    </>
  );
};
