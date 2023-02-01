import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  tabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
}) => {
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={`../${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedTab
        ? (
          <div className="block" data-cy="TabContent">
            {selectedTab.content}
          </div>
        )
        : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
    </>
  );
};
