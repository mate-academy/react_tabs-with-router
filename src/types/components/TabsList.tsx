import React from 'react';
import { Tab } from '../Tab';
import '../../App.scss';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface TabsListProps {
  tabs: Tab[];
}

export const TabsList: React.FC<TabsListProps> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTabId = tabId ? tabId : '';

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
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
