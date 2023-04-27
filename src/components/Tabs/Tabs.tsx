import React from 'react';
import { Tab } from '../Tab/Tab';

type Props = {
  selectedTabId: string | undefined
};

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC<Props> = ({ selectedTabId }) => {
  const tabContent = tabs
    .find(tab => tab.id === selectedTabId)?.content || 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              title={tab.title}
              id={tab.id}
              key={tab.id}
              selectedTabId={selectedTabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
