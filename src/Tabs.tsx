import React, { memo } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = memo(({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId) || 0;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn(
                {
                  'is-active': tab.id === tabId,
                },
              )}
            >
              <Link
                to={tab.id}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {activeTab === 0
        ? (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )
        : (
          <div className="block" data-cy="TabContent">
            {activeTab.content}
          </div>
        )}
    </div>
  );
});
