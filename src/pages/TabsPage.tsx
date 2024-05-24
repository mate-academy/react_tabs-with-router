import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const [activeTab, setActiveTab] = useState<string | null>(
    tabId ? tabId : null,
  );

  useEffect(() => {
    if (tabId && tabsFromServer.some(tab => tab.id === tabId)) {
      setActiveTab(tabId);
    } else {
      setActiveTab(null);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabsFromServer.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTab ? 'is-active' : ''}
              onClick={() => setActiveTab(tab.id)}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab
          ? tabsFromServer.find(tab => tab.id === activeTab)?.content
          : 'Please select a tab'}
      </div>
      <Outlet />
    </>
  );
};
