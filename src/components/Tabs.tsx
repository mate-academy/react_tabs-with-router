import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { tabs } from '../constants/tabs';

const NOTIFICATION = 'Please select a tab';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();

  const selectedTab = tabId
    ? (tabs.find(tab => tab.id === tabId) ?? null)
    : null;

  const content = selectedTab ? selectedTab.content : NOTIFICATION;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === tabId })}
              data-cy="Tab"
              key={tab.id}
            >
              {/* the first variant absolute path */}
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink" id={tab.id}>
                {/* the second variant relative path */}
                {/* <Link to={`../${tab.id}`} data-cy="TabLink" id={tab.id}> */}
                {/* the third variant relative path */}
                {/* <Link
                to={selectedTab ? `../${tab.id}` : `${tab.id}`}
                data-cy="TabLink"
                id={tab.id}
              > */}
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
