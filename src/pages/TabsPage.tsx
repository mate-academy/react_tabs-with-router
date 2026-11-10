import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';
import { TabsList } from '../components/TabsList';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const selectedTab = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList tabs={tabs} tabId={tabId} />

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
