import React from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from '../../components/TabItem';
import { tabs } from '../../consts/consts';

export const Tabs: React.FC = () => {
  const { tabId = null } = useParams();

  const selectedTab = tabs.find((tab) => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              tab={tab}
              selectedTabId={tabId}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
