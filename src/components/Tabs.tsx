import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { tabs } from '../constants/tabs';

type Props = {
  tabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabId,
}) => {
  const isSelected = (tab: Tab) => tab.id === tabId;

  const selectedTabContent = tabs.find(tab => tab.id === tabId)?.content
    || 'Please select a tab';

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames('tab-item', {
                'is-active': isSelected(tab),
              })}
              data-cy="Tab"
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
        {selectedTabContent}
      </div>
    </div>
  );
};