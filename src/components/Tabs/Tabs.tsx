import classNames from 'classnames';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const isActiveTab = tabs.find(({ id }) => id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ title, id }) => {
              return (
                <li
                  key={id}
                  data-cy="Tab"
                  className={classNames({
                    'is-active': id === tabId,
                  })}
                >
                  <NavLink to={`/tabs/${id}`}>{title}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {isActiveTab ? isActiveTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
