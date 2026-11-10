import React from 'react';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  activeTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  const activeTab = activeTabId
    ? tabs.find(tab => tab.id === activeTabId)
    : undefined;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={`${tab.id === activeTab?.id ? 'is-active' : ''}`}
            data-cy="Tab"
            key={tab.id}
          >
            <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
