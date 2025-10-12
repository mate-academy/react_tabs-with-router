import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId?: string | null;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
