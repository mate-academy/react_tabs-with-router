import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { ITab } from '../types/Tab';

export const tabs: ITab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
export const Tabs: React.FC = () => {
  const { tabId } = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => (
          <li
            key={id}
            data-cy="Tab"
            className={cn({ 'is-active': id === tabId })}
          >
            <NavLink to={id}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
