import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <div className="tabs">
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

      <div className="tab-content" data-cy="TabContent">
        {selectedTab ? (
          <div>
            <p>{selectedTab.content}</p>
          </div>
        ) : (
          <p>Please select a tab</p>
        )}
      </div>
    </div>
  );
};
