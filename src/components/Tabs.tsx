import React from 'react';
import cn from 'classnames';
import { Tab as TabType } from '../types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tabs: TabType[];
  activeTabId?: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  const currentActiveTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === activeTabId })}
                key={tab.id}
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {currentActiveTab ? currentActiveTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
