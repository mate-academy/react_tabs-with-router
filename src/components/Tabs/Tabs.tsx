import React from 'react';
import { Tab } from '../Tab/Tab';
import './Tabs.scss';

interface TabsInterface {
  id: string;
  title: string;
  content: string;
}

interface TabsProps {
  tabs: TabsInterface[];
  tabId: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, tabId }) => {
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1>Tabs</h1>
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
