import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  activeTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === activeTab?.id,
              })}
              data-cy="Tab"
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
