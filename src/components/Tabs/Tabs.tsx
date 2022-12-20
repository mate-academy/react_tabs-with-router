import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string | undefined,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId = '0',
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);
  const isTabSelected = (tab: Tab) => tab.id === selectedTabId;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': isTabSelected(tab) })}
            >
              <Link to={`../${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
