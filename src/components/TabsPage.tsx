import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../tabs';
import { Tabs } from './Tabs';

export default function TabsPage() {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
    <h1 className='title'>Tabs page</h1>

    <div>
      <Tabs tabs={tabs} activeTabId={tabId} />
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
    </>
  );
}
