import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { tabs } from '../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container p-4">
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} activeTabId={tabId} />

      <div className="block" data-cy="TabContent">
        {selectedTab ? (
          <div>{selectedTab.content}</div>
        ) : (
          <p>Please select a tab</p>
        )}
      </div>
    </div>
  );
};
