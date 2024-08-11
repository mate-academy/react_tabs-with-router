import React from 'react';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
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
              key={tab.id}
              className={cn({ 'is-active': tab.id === tabId })}
            >
              {selectedTab ? (
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              ) : (
                <Link to={`${tab.id}`}>{tab.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
