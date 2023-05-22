import { NavLink, useParams } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';
import { tabs } from '../../api/tabs';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(({ id }) => id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={classNames({
                  'is-active': id === tabId,
                })}
                data-cy="Tab"
                key={id}
              >
                <NavLink
                  to={`../${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
