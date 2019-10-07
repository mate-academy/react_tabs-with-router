import React from 'react';
import { Tabs } from '../Tabs/Tabs';

export const TabsPage = ({ match, tabs }) => {
  const currentTabId = match.params.id;
  const currentTab = tabs.some(tab => tab.id === currentTabId);
  const tab = tabs.find(elem => elem.id === currentTabId);

  return (
    <>
      <Tabs tabs={tabs} />
      {currentTab && <p className="tab-content">{tab.content}</p>}
    </>
  );
};
