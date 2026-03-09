import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import React from 'react';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams();

  const searchByTabId = tabs.find((tab: Tab) => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab: Tab) => (
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
          {!tabId || searchByTabId?.id === undefined ? (
            <p>Please select a tab</p>
          ) : (
            <h2>{searchByTabId?.content}</h2>
          )}
        </div>
      </div>
    </div>
  );
};


export default TabsPage;
