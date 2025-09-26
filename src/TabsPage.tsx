import React from 'react';
import { useParams } from 'react-router-dom';
import Tabs from './Tabs';
import { Tab as TabType } from './types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const selected = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} selectedId={tabId} />

      <div className="block" data-cy="TabContent">
        {selected ? selected.content : 'Please select a tab'}
      </div>
    </>
  );
};

export default TabsPage;
