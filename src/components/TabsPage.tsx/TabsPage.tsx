import React from 'react';
import { useParams } from 'react-router-dom';
import { TabsList, tabs } from '../TabsList';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find((searchedTab) => searchedTab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList />

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
