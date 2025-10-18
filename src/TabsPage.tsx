import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tabs } from './Tabs';
import { Tab } from './types/Tab';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const tabs: Tab[] = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs.map(tab => ({
          id: tab.id,
          title: (
            <Link
              data-cy="Tab"
              to={`/tabs/${tab.id}`}
              className={tab.id === tabId ? 'is-active' : undefined}
            >
              {tab.title}
            </Link>
          ),
        }))}
        activeTabId={tabId || ''}
      />
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
