import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { Outlet } from 'react-router-dom';

interface Props {
  tabs: Tab[];
  defaultTabId?: string;
}

export const TabsPage: React.FC<Props> = ({ tabs, defaultTabId }) => {
  const params = useParams<{ tabId: string }>();
  const tabId = params.tabId || defaultTabId || '';
  const activeTab = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? <Outlet /> : 'Please select a tab'}
      </div>
    </>
  );
};
