import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string | undefined,

};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => (
  <>
    <div className="tabs is-centered">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames(
              {
                'is-active':
                tab.id === selectedTabId,
              },
            )}
            key={tab.id}
          >
            <NavLink to={tab.id}>
              <span className="icon is-small">
                <i className="fas fa-image" aria-hidden="true" />
              </span>
              <span>{tab.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <Outlet />
  </>
);
