import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs as ReactTabs, TabList, Tab } from 'react-tabs';
import { Tab as TabType } from '../types/Tab';

type Props = {
  tabs: TabType[];
  activeTabId?: string | null;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  const selectedIndex = tabs.findIndex(tab => tab.id === activeTabId);

  return (
    <ReactTabs selectedIndex={selectedIndex >= 0 ? selectedIndex : 0}>
      <TabList>
        {tabs.map(tab => (
          <Tab key={tab.id} selectedClassName="is-active">
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </Tab>
        ))}
      </TabList>
    </ReactTabs>
  );
};
