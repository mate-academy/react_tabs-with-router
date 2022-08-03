import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

export type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  selectedTabId?: string,
};

export const Tabs:React.FC<Props> = (
  {
    tabs,
    selectedTabId,
  },
) => {
  const currentTab = tabs.find(tab => selectedTabId === tab.id);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="tab"
                className={
                  classNames({ 'is-active': tab.id === selectedTabId })
                }
                key={tab.id}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
