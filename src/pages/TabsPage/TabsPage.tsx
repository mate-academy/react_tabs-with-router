import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';
import { TabLink } from '../../components/TabLink';

export const TabsPages: React.FC = memo(() => {
  const { tabId = '' } = useParams();

  const tabContent = tabs.find(tab => tab.id === tabId)?.content || null;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === tabId;

            return (
              <TabLink
                key={tab.id}
                tab={tab}
                isActive={isActive}
              />
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent || 'Please select a tab'}
      </div>
    </div>
  );
});
