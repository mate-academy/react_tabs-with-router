import React from 'react';
import { Tab } from '../Tab/Tab';
import './Tabs.css';

interface TabsProps {
  tabs: TabsInterface[];
  tabId: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, tabId }) => {
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabs">
      <h1 className="tabs__heading">Tabs</h1>
      <nav>
        <ul className="tabs__nav">
          {tabs.map((tab) => (
            <li key={tab.title}>
              <Tab tabId={tab.id} title={tab.title} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="tabs__content">
        {currentTab && currentTab.content}
      </div>

    </div>
  );
};
