import React from 'react';
import { Tabs } from './Tabs/Tabs';
import { Tab } from './types/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  selectedTabId: string,
  handleTabSelected: (tab: Tab) => void,
};

export const TabsPage: React.FC<Props> = ({
  selectedTabId,
  handleTabSelected,
}) => {
  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleTabSelected}
      />

      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    </div>
  );
};
