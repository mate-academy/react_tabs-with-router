import React, { } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { getTabs } from '../api/tabs';
import { useSelectedTab } from '../hooks/useSelectedTab';

export const TabsPage: React.FC = () => {
  const { tabId: selectedTabId } = useParams();
  const selectedTab = useSelectedTab();
  const tabs = getTabs();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              className={classNames(
                { 'is-active': selectedTabId === tab.id },
              )}
            >
              <Link to={`../${tab.id}`} key={tab.id}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
