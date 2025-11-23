import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';
import cn from 'classnames';

interface Props {
  tabs: Tab[];
  tabId: string | undefined;
}

export const TabsList: React.FC<Props> = ({ tabs, tabId }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({ 'is-active': tab.id === tabId })}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};
