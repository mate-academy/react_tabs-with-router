import React from 'react';
import { Tab } from './Tab';

type Props = {
  tabs: TabInterface[];
  tabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => {
  const currentTab = tabs.find(tab => tab.id === Number(tabId));

  return (
    <div className="tabs__container">
      <h1>Tabs</h1>
      <div className="tabs__nav">
        {
          tabs.map((tab: TabInterface) => (
            <Tab tab={tab} key={tab.id} />
          ))
        }
      </div>
      <h3>
        {currentTab && (
          currentTab.content
        )}
      </h3>
    </div>
  );
};
