import React from 'react';
import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem/TabItem';

interface Props {
  tabs: Tab[],
  tabId: string | null,
}

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => {
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem tab={tab} selectedTab={selectedTab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
