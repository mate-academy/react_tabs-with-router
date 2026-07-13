import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';
import React from 'react';

interface TabsProps {
  tabs: Tab[];
  activeTabId: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTabId }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={classNames({
            'is-active': tab.id === activeTabId,
          })}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};
