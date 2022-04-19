import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];

export const getTabById = (tabId: string) => (
  tabs.find(tab => tab.id === tabId)
);

const App: React.FC = React.memo(() => {
  const { tabId } = useParams();
  const currentTab = useMemo(() => getTabById(tabId || ''), [tabId]);

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {currentTab?.title}
      </h1>
      <Tabs
        tabs={tabs}
      />
    </div>
  );
});

export default App;
