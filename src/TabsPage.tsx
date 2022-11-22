import React from 'react';
import { Tabs } from './Tabs';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab?: Tab;
};

export const TabsPage: React.FC<Props> = ({
  tabs,
  selectedTab,
}) => (
  <>
    <h1 className="title">Tabs page</h1>

    <Tabs
      tabs={tabs}
      selectedTab={selectedTab}
    />

    <div className="block" data-cy="TabContent">
      {!selectedTab
        ? 'Please select a tab'
        : selectedTab.content}
    </div>
  </>
);
