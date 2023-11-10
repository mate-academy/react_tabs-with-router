import React from 'react';
import { SelectedTab } from './SelectedTab';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab?: Tab;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => {
          return (
            <SelectedTab
              key={tab.id}
              tabId={tab.id}
              selectedTabId={selectedTab?.id}
              title={tab.title}
            />
          );
        })}
      </ul>
    </div>
  </div>
);
