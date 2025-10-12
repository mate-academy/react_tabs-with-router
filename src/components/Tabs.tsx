import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Tab as TabType } from '../types/Tab';

type Props = {
  tabs: TabType[];
  activeTabId?: string | null;
};

export const MyTabs: React.FC<Props> = ({ tabs }) => {
  return (
    <Tabs>
      <TabList>
        {tabs.map(tab => (
          <Tab key={tab.id}>{tab.title}</Tab>
        ))}
      </TabList>

      {tabs.map(tab => (
        <TabPanel key={tab.id}>{tab.content ? tab.content : null}</TabPanel>
      ))}
    </Tabs>
  );
};
