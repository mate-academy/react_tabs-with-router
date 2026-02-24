import React from 'react';
import { tabs } from '../constants/constants';
import { Link, useParams } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tabId === tab.id ? 'is-active' : ''}
            >
              <Link data-cy="TabLink" to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {(!tabId || !tabs.some(tab => tab.id === tabId)) &&
          'Please select a tab'}
        {tabId && tabs.find(tab => tabId === tab.id)?.content}
      </div>
    </div>
  );
};
