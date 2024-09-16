import 'bulma/css/bulma.css';
import React from 'react';
import { tabs } from '../../api/tabs';

import { Link, useParams } from 'react-router-dom';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={tab.id === selectedTabId ? 'is-active' : ''}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content ||
          'Please select a tab'}
      </div>
    </>
  );
};
