// Tabs.tsx
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
};

export const Tabs: React.FC<TabsProps>
= ({ tabs, activeTab, setActiveTab }) => {
  const { tabId } = useParams();

  useEffect(() => {
    setActiveTab(tabId || tabs[0].id);
  }, [tabId, tabs, setActiveTab]);

  const selectedTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.id === activeTab ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
