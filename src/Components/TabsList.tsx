import { Tab } from '../types/Tab';
import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTabId = tabId;

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === selectedTabId })}
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
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
