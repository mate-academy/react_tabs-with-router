import React, { useMemo } from 'react';
import { useParams } from 'react-router';

import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const getTabId = (tabId: string) => (
  tabs.find(el => el.id === tabId)
);

const App: React.FC = React.memo(() => {
  const { tabId } = useParams();
  const selectedTab = useMemo(() => getTabId(tabId || ''), [tabId]);

  return (
    <div className="App">
      <h1>
        Selected&nbsp;
        {selectedTab?.title}
      </h1>
      <Tabs
        tabs={tabs}
      />
    </div>
  );
});

export default App;
