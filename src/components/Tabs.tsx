import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tabToFind => tabToFind.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === tab.id,
              })}
            >
              <Link to={`${tab.id}`}>
                {`${tab.title}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? (
          selectedTab.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
