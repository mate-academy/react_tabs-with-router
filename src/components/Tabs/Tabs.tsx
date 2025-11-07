import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';

interface TabsProps {
  tabs: Tab[];
  activeTabId: string | undefined;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': tab.id === activeTab?.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
