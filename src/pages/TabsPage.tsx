import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { tabs } from '../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={tabId} />
    </>
  );
};
