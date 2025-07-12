import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';
export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} className={tabId === tab.id ? 'is-active' : ''}>
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId
          ? activeTab
            ? activeTab.content
            : 'Please select a tab'
          : 'Please select a tab'}
      </div>
    </div>
  );
};
