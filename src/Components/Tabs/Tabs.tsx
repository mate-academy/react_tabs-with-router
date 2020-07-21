import React, { FC } from 'react';
import { Tab } from '../Tab/Tab';
import { TabType } from '../interfaces/TabInterface';

interface Props {
  tabs: TabType[];
  tabId: string;
}

export const Tabs: FC<Props> = (props) => {
  const { tabs, tabId } = props;

  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            toUrl={tab.id}
            title={tab.title}
          />
        ))}
      </div>
      {currentTab && (currentTab.content)}
    </div>
  );
};
