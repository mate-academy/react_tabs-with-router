import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            data-cy="Tab"
            key={tab.id}
          >
            <NavLink
              to={`#/${tab.id}`}
              className={({ isActive }) => classNames(
                { 'is-active': isActive },
              )}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
