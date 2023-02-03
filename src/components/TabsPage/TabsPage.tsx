import React, { memo, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../../api/Tabs';
import { TabItem } from '../TabItem/TabItem';

export const TabsPage: React.FC = memo(() => {
  const { tabId } = useParams();
  const selectedTab = useMemo(() => tabs.find(
    tab => tab.id === tabId,
  ), [tabs, tabId]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <TabItem tab={tab} key={tab.id} />
            ))}
          </ul>
        </div>

        {!selectedTab
          ? (
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )
          : (
            selectedTab.content
          )}
      </div>
    </div>
  );
});
