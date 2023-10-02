import { useState } from 'react';
import { TabItem } from './TabItem';

export const Tabs = () => {
  const [settedTabId, setTabId] = useState<string | undefined>(undefined);

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const usedTab = tabs.find(tab => tab.id === settedTabId);

  return (
    <>

      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabItem
              tab={tab}
              key={tab.id}
              setTabId={setTabId}
              settedTabId={settedTabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {usedTab ? usedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
