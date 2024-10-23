import React from 'react';
import { tabs } from '../Data/tabs';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

export const Tabs = () => {
  const { selectedTabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="container">
        <h1 className="title">Tabs page</h1>
      </div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTabId === tab.id })}
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
