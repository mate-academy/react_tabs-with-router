import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';
import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({ 'is-active': tab.id === selectedTabId })}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title} </Link>
        </li>
      ))}
    </ul>
  );
};
