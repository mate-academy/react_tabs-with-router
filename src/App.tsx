import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useState } from 'react';
import { Tab } from './types/Tab';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>('');

  const handleSelect = (tab: Tab) => setSelectedTabId(tab.id);

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item is-active">Home</a>
            <a href="/tabs" className="navbar-item">Tabs</a>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <h1 className="title">Home page</h1>
          <h1 className="title">Page not found</h1>

          <Tabs
            tabs={tabs}
            selectedTabId={selectedTabId}
            onTabSelected={handleSelect}
          />

          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        </div>
      </div>
    </>
  );
};
