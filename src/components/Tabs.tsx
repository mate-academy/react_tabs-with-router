import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  activeTabId?: string;
}

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  const location = useLocation();
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const tabPath = `/tabs/${tab.id}`;
            const isActive = location.pathname === tabPath;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': isActive,
                })}
              >
                <Link to={tabPath}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
