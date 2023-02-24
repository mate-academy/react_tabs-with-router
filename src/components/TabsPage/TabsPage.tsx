import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';
import { VisibleTab } from '../VisibleTab';
import { TabLink } from '../TabLink';

export const TabsPage: React.FC = () => {
  const { tabId: selectedTabId = '0' } = useParams();

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabLink selectedTabId={selectedTabId} />

      <VisibleTab selectedTab={selectedTab} />
    </>
  );
};
