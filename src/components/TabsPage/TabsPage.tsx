import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>
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
        {tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
