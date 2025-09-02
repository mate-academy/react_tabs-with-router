import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsProps {
  tabs: Tab[];
  activeTabId?: string;
}

export function Tabs({ tabs, activeTabId }: TabsProps) {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
