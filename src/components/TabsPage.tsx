import React, { useMemo } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { TabList } from './TabList';
import { TabContent } from './TabContent';

export const TabsPage = () => {
  const { tabId } = useParams();

  const tabs = useMemo(
    () => [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
    [],
  );

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabList tabs={tabs} selectedTabId={tabId} />
      <TabContent selectedTab={selectedTab} />
      <Outlet />
    </>
  );
};
