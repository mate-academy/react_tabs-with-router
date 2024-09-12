import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import tabsFromServer from '../../api/tabs';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? `${tabId}` : 0;
  const selectedTab = tabsFromServer.find(({ id }) => id === selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabsFromServer.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTabId === tab.id,
              })}
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
