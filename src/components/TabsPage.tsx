import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../api';

export const TabsPage: React.FC = () => {
  const { tabID } = useParams();
  const tabSelect = tabs.find(tab => tab.id === tabID);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="tab"
              className={classNames({
                'is-active': tab.id === tabSelect?.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {tabSelect?.content || 'Please select a tab'}
      </div>
    </>
  );
};
