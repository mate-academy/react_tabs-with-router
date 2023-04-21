import React from 'react';
import { Tab } from '../../types/Tab';
import { PageTab } from '../PageTab';

type Props = {
  tabs: Tab[];
  selectedTabId: string | null;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <PageTab
              id={id}
              title={title}
              selectedTabId={selectedTab?.id || null}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
