import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';

import './TabsPage.scss';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabsPage">
      <p className="tabsPage__title">
        {!tabId || !activeTab ? 'Please select a tab' : ''}
      </p>
      <ul className="tabsPage__list">
        {
          tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tabId === tab.id,
              })}
            >
              <NavLink
                to={`#/tabs/${tab.id}`}
                className="button"
              >
                {tab.title}
              </NavLink>
            </li>
          ))
        }
      </ul>

      <div>
        {activeTab && (
          <p>
            {activeTab.content}
          </p>
        )}

      </div>
    </div>
  );
};
