import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tabs } from '../data/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tabId === tab.id ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
