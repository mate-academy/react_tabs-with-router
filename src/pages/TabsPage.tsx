import { useState } from 'react';
import { Tabs } from '../components/Tabs/Tabs';
import { Tab } from '../types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <Tabs
          data-cy="Tab"
          tabs={tabs}
          value={selectedTab}
          onChange={setSelectedTab}
        />
      </div>

      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
