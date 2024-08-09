import React from 'react';
import { useParams } from 'react-router-dom';
import { TabsComponent } from './TabsComponent';

export const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsComponent selectedTabId={tabId} />
    </>
  );
};
