import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { tabs } from '../../api/tabs';

type Props = {
  params?: string;
};

export const TabsNav: React.FC<Props> = ({ params }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(({ id, title }) => (
        <li
          key={id}
          data-cy="Tab"
          className={cn({ 'is-active': params === id })}
        >
          <NavLink to={`/tabs/${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);
