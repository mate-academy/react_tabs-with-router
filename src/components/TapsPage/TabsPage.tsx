import classNames from 'classnames';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const PageTabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">
        {selectedTab ? `Selected tab is ${selectedTab.title}` : 'Please select a tab'}
      </h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTab?.id,
              })}
              key={tab.id}
            >
              <NavLink
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab?.content}
      </div>
    </>
  );
};
