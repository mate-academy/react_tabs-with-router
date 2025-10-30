import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  tabId?: string;
};

export const Tabs: React.FC<Props> = ({ tabs, tabId }) => {
  const currentTab = tabId ? tabs.find(tab => tab.id === tabId) : null;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div data-cy="TabsComponent">
          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  key={tab.id}
                  className={cn(tabId === tab.id ? 'is-active' : '')}
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
            {!tabId && 'Please select a tab'}
            {tabId && !currentTab && 'Please select a tab'}
            {tabId && currentTab?.content}
          </div>
        </div>
      </div>
    </div>
  );
};
