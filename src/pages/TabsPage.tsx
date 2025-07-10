import React from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsPageProps {
  tabs: Tab[];
  title: string;
}

export const TabsPage: React.FC<TabsPageProps> = ({ tabs, title }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tabId === tab.id ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? (
          <p>{selectedTab.content}</p>
        ) : (
          <span>Please select a tab</span>
        )}
      </div>
      <Outlet />
    </>
  );
};
