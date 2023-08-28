import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../data/tabs';
import { Tab } from '../types/Tab';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const activeTab: Tab | undefined = tabs.find(tab => tab.id === tabId);
  const tabContent = activeTab?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`../${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
