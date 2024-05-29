import React from 'react';
import { Tabs } from '../components/Tabs/Tabs';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: Tab | null;
  onTabSelected: (tab: Tab) => void;
};

export const TabsPage: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
      />
    </>
  );
};
