import React from 'react';
import { Tab } from './Tab';

type Props = {
  tabs: Tab[];
  tabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => {
  return (
    <div className="tabs__container">
      <h1>Tabs</h1>
      <div className="tabs__nav">
        {
          tabs.map((tab: Tab) => (
            <Tab tab={tab} />
          ))
        }
      </div>
      <h3>
        {tabs.find(tab => tab.id === Number(tabId))?.content}
      </h3>
    </div>
  );
};
