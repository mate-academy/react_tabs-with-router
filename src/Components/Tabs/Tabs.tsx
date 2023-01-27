import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { TabItem } from '../TabItem';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = React.memo(({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = useMemo(() => (
    tabs.find(tab => tab.id === tabId)
  ), [tabs, tabId]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
});
