import React from 'react';
import './TabsPage.scss';

import { Link, useParams } from 'react-router-dom';
import className from 'classnames';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="TabsPage">
      <h1 className="TabsPage__title">
        {!activeTab
          ? 'Please select a tab' : 'Tabs page'}
      </h1>

      <ul className="TabsPage__tabs">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="TabsPage__tab"
          >
            <Link
              className={className(
                'TabsPage__button',
                { 'TabsPage__button--active': tabId === tab.id },
              )}
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>

      {activeTab && (
        <p className="TabsPage__content">
          {activeTab.content}
        </p>
      )}
    </div>
  );
};
