import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabsData } from '../../api/tabs';

export const Tabs: React.FC = () => {
  const { selectedTabId = 'tab-0' } = useParams();

  const activeTab = tabsData.find(tab => tab.id === selectedTabId);
  const isSelected = (tabId: string) => tabId === selectedTabId;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabsData.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': isSelected(tab.id),
              })}
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab
          ? activeTab.content
          : (
            'Please select a tab'
          )}
      </div>
    </div>
  );
};
