// TabsPage.tsx
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../services/tabsFromServer';
import { useState } from 'react';
import classNames from 'classnames';

export default function TabsPage() {
  const { tabId } = useParams<{ tabId: string }>();
  const [selectedTab, setSelectedTab] = useState<string | null>(tabId || null);

  const handleTabClick = (clickedTabId: string) => {
    setSelectedTab(clickedTabId);
  };

  const selectedTabContent = selectedTab
    ? tabs.find(tab => tab.id === selectedTab)?.content
    : null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              onClick={() => handleTabClick(tab.id)}
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === selectedTab })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent || 'Please select a tab'}
      </div>
    </>
  );
}
