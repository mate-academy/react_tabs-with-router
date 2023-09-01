import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from './types/Tab';
import { tabs } from './constants';

type Props = {
  tabId: string,
};

export const Tabs: React.FC<Props> = ({ tabId }) => {
  const isSelected = (tab: Tab) => tab.id === tabId;

  const selectedTabContent = tabs.find(tab => tab.id === tabId)?.content
    || 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': isSelected(tab) })}
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

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </>
  );
};
