import React from 'react';

import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabContent } from './TabContent';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const findSelectedTab = (id: string) => {
    return tabs.find(tab => tab.id === id);
  };

  const selectedTab = tabId ? findSelectedTab(tabId) : null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabContent key={tab.id} tab={tab} selectedTabId={tabId} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
