import { useState } from 'react';
import { TabsItem } from './TabsItem';
import { Tab } from '../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsList: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabsItem
              key={tab.id}
              tab={tab}
              setSelectedTab={setSelectedTab}
              selectedTabId={selectedTab?.id}
            />
          ))}
        </ul>
      </div>
      {selectedTab
        ? (
          <div className="block" data-cy="TabContent">
            {selectedTab.content}
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}

    </>
  );
};
