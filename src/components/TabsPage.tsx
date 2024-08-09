import React from 'react';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
              key={tab.id}
            >
              {tabId ? (
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              ) : (
                <Link to={`${tab.id}`}>{tab.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? `${selectedTab.content}` : 'Please select a tab'}
      </div>
    </>
  );
};
