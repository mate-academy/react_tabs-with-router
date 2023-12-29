import React from 'react';
import { useParams } from 'react-router-dom';
import { TabsList } from '../../components/TabsList/TabsList';
import { tabsfromserver } from '../../api/tabsfromserver';

export const TabsPage: React.FC = () => {
  const { tabId = 'tab-0' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList
        tabs={tabsfromserver}
        selectedTabId={tabId}
      />
    </>
  );
};
