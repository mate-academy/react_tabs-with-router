import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { TabItem } from './TabItem';
import { tabs } from '../data/tabs';

export const Tabs: FC = () => {
  const { tabId = null } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              tab={tab}
              key={tab.id}
              selectedTabId={tabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
