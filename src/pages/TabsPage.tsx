import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const params = useParams<{ tabId?: string }>();

  const activeTabId =
    params.tabId && tabs.some(tab => tab.id === params.tabId)
      ? params.tabId
      : null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': activeTabId === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabId
          ? tabs.find(tab => tab.id === activeTabId)?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
