import React from 'react';
import Tabs from './Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  tabId: string;
};

const TabsPage: React.FC<Props> = ({ tabId }) => {
  return (
    <>
      <h1>TabsPage</h1>
      <Tabs tabs={tabs} />
      <div>{tabs.find(item => item.id === tabId)?.content}</div>
    </>
  );
};

export default TabsPage;
