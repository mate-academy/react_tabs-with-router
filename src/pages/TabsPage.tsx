import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import tabs from '../api/tabs';
import { TabItem } from '../components/TabItem';

export const TabsPage: React.FC = React.memo(() => {
  const { tabId } = useParams();
  const selectedTab = useMemo(() => (
    tabs.find(tab => tab.id === tabId)
  ), [tabs, tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <TabItem key={tab.id} tab={tab} />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab
            ? selectedTab.content
            : 'Please select a tab'}
        </div>
      </div>
    </>
  );
});
