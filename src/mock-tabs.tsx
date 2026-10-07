import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from './types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected?: (id: string) => void;
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === selectedTabId ? 'is-active' : ''}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
