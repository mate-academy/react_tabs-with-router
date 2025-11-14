import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from './Tabs';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId?: string }>();

  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tabs
              key={tab.id}
              tab={tab}
              selectedTabId={selectedTab?.id ?? null}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
