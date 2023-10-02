import { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App : React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id);

  const onTabSelected = (activeTab: Tab) => {
    if (tabs.find(tab => tab.id === selectedTabId)) {
      setSelectedTabId(activeTab.id);
    } else {
      setSelectedTabId(tabs[0].id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${tabs.find(tab => tab.id === selectedTabId)?.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
