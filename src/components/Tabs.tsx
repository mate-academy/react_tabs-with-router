import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import type { Tab as TabType } from '../types/Tab';

interface Props {
  tabs: TabType[];
  activeTabId?: string;
}

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({ 'is-active': tab.id === activeTabId })}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
