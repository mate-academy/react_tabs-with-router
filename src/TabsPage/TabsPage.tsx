import React from 'react';

import { Tab } from '../types/Tab';
import { Tabs } from '../Tabs/Tabs';
import { TabContent } from '../TabContent/TabContent';

type Props = {
  tabs: Tab[],
  tabId: string
};

export const TabsPage: React.FC<Props> = ({ tabs, tabId }) => {
  const selectedTabContens = tabs.find(
    (tab) => tab.id === tabId,
  )
    ?.content || 'Please select tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        tabs={tabs}
        tabId={tabId}
      />

      <TabContent text={selectedTabContens} />
    </>
  );
};
