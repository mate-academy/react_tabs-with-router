import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import cn from 'classnames';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const selectedTabId = tabId ? tabId : '';

  let selectedTab = null;

  if (selectedTabId) {
    selectedTab = tabs.find(tab => tab.id === selectedTabId);
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': selectedTabId === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
