import cn from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { tabs } from '../data/Tabs';

function getTabById(id: string) {
  return tabs.find(tab => tab.id === id);
}

export const TabsList: React.FC = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId || '';

  const selectedTab = getTabById(selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === selectedTabId })}
            >
              <Link to={`../${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        { selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
