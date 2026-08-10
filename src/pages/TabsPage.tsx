import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tabs as tabsData } from '../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();

  const isInvalidTab = tabId && !tabsData.some(tab => tab.id === tabId);

  const activeTab = tabId
    ? tabsData.find(tab => tab.id === tabId)
    : tabsData[0];

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      {/* Список табів */}
      <div className="tabs is-boxed">
        <ul>
          {tabsData.map(tab => {
            const isActive = activeTab?.id === tab.id && !isInvalidTab;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isInvalidTab ? 'Please select a tab' : activeTab?.content}
      </div>
    </div>
  );
};
