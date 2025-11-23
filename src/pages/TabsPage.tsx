import React from 'react';
import { TabsList } from '../components/TabsList';
import { useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const selectTabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <TabsList tabs={tabs} tabId={tabId} />
      </div>

      <div className="block" data-cy="TabContent">
        {selectTabContent ? selectTabContent : 'Please select a tab'}
      </div>
    </>
  );
};
