import React from 'react';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

type TabsPageProps = {
  tabs: Tab[];
};

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabId ? tabs.find(tab => tab.id === tabId) : undefined;

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
      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
