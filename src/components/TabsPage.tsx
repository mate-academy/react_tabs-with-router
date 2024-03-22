import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import React from 'react';
import { tabs } from '../services/api';

export const TabsPage = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(({ id }) => id === tabId);

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
                'is-active': tabId === tab.id,
              })}
            >
              <Link to={`${tab.id}`} data-cy="TabLink">
                {`Tab ${tab.id}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
