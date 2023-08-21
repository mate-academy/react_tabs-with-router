import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  tabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames({
                'is-active': tabId === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <NavLink
                to={`../${tab.id}`}
                data-cy="TabLink"
                id={tab.id}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
