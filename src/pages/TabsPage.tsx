import React from 'react';
import { TabContent } from '../components/TabContent/TabContent';
import { Tabs } from '../components/Tabs/Tabs';
import { Tab } from '../types/Tab';

const TABS_DATA: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const [tabs] = React.useState<Tab[]>(TABS_DATA);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <Tabs tabs={tabs} />
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};
