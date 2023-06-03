import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = React.memo(({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              tab={tab}
              isActive={tab.id === tabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
});
