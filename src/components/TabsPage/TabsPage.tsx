import React from 'react';
import { useMatch } from 'react-router-dom';
import { tabs } from '../../api/tabs';
import { Title } from '../Title';
import { TabItem } from '../TabItem';
import { TabContent } from '../TabContent';

export const TabsPage: React.FC = () => {
  const match = useMatch('/tabs/:tabId');
  const selectedTab = tabs.find(
    tabFromList => tabFromList.id === match?.params.tabId,
  ) || null;

  return (
    <>
      <Title
        title="Tabs page"
      />

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              tab={tab}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <TabContent
        selectedTab={selectedTab}
      />
    </>
  );
};
