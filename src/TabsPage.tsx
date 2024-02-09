// TabsPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Tabs from './Tabs';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = () => {
  const { tabId }: { tabId: string } = useParams();

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs activeTab={tabId}>
          {tabs.map(tab => (
            <div key={tab.id} label={tab.title} id={tab.id}>
              {tab.content}
            </div>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabsPage;
