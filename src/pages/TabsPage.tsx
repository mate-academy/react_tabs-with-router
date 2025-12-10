import React from 'react';
import { useParams } from 'react-router-dom';
import { TabsBlock } from '../components/TabsBlock';
import { tabs } from '../App';

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsBlock currentTabId={tabId} />

      <div className="block" data-cy="TabContent">
        {!tabId || !selectedTab ? (
          <>Please select a tab</>
        ) : (
          selectedTab.content
        )}
      </div>
    </>
  );
};
