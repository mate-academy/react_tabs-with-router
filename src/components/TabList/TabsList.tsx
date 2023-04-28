import React from 'react';
import { Tab } from '../../types/Tab';
import { TabsLink } from '../TabsLink';

type Props = {
  tabs: Tab[];
  selectedTabId?: string;
};

export const TabList: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const tabContent = tabs
    .find(tab => tab.id === selectedTabId)?.content || 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">
        <TabsLink
          tabs={tabs}
          onSelectedTabId={selectedTabId}
        />
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
