import React from 'react';
import { Tab } from '../../../types/Tab';
import { TabItem } from '../TabItem';

type Props = {
  tabs: Tab[],
  selectedTabId: string
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = tabs.find((tab: Tab) => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <TabItem
              tab={tab}
              key={tab.id}
              selectedTabId={selectedTabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        { selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
