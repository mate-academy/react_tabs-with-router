import React from 'react';
import { useMatch } from 'react-router-dom';
import { TabItem } from '../../components/TabItem.tsx';
import { tabs } from '../../data';

export const TabsPage: React.FC = () => {
  const match = useMatch('/tabs/:tabId');
  const selectedTab = tabs.find(({ id }) => id === match?.params.tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <TabItem tab={tab} />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {
            selectedTab
              ? selectedTab.content
              : 'Please select a tab'
          }
        </div>
      </div>
    </div>
  );
};
