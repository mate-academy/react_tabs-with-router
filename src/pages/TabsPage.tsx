import { TabsList } from '../components/TabsList';
import React from 'react';
import { Tab } from '../types/Tab';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};
export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} activeTabId={tabId ?? null} />
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
