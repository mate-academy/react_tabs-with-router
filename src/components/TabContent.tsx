import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  tabId: string | undefined;
};

export const TabContent: React.FC<Props> = ({ tabs, tabId }) => {
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const selectedTabContent = selectedTab
    ? selectedTab.content
    : 'Please select a tab';

  return (
    <div className="block" data-cy="TabContent">
      {selectedTabContent}
    </div>
  );
};
